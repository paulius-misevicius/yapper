import { Router } from "express"
import { pool } from "../db.ts"
import type { Post } from "../types.ts"

const postsRouter = Router()

postsRouter.get("/", async (req, res) => {
    
    const limit = Number(req.query.limit) || 50
    
    let sort = "id"

    if (req.query.sort === "recent") {
        sort = "p.created_at DESC"
    }

    try {
        const result = await pool.query<Post>(`
            SELECT 
                p.id,
                p.flair,
                p.title,
                p.body,
                p.created_at AS "createdAt",
                b.color,
                b.name as "boardName",
                (
                    SELECT COALESCE(SUM(v.value), 0)::int 
                    FROM votes v 
                    WHERE p.id = v.post_id
                ) AS score,
                (
                    SELECT COUNT(*)::int
                    FROM comments c
                    WHERE p.id = c.post_id
                ) AS "commentCount"
            FROM posts p
            JOIN boards b ON p.board_id = b.id
            GROUP BY p.id, b.color, b.name
            ORDER BY ${sort}
            LIMIT $1
        `, [limit])
    
        res.json(result.rows)
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

postsRouter.get("/board/:boardName", async (req, res) => {

    const board = req.params.boardName

    try {
        const result = await pool.query<Post>(`
            SELECT
                p.id,
                p.flair,
                p.title,
                u.username as "authorUsername",
                p.body,
                p.created_at AS "createdAt",
                (
                    SELECT COALESCE(SUM(v.value), 0)::int 
                    FROM votes v 
                    WHERE p.id = v.post_id
                ) AS score,
                (
                    SELECT COUNT(*)::int
                    FROM comments c
                    WHERE p.id = c.post_id
                ) AS "commentCount"
            FROM posts p
            JOIN boards b ON p.board_id = b.id
            JOIN users u ON p.user_id = u.id
            WHERE b.name = $1
        `, [board])

        res.json(result.rows)
    } catch (error) {
        console.error(error)
    }
})

postsRouter.get("/user/:username", async (req, res) => {

    const username = req.params.username

    try {
        const result = await pool.query<Post>(`
            SELECT
                p.id,
                p.title,
                p.body,
                p.created_at AS "createdAt",
                (
                    SELECT b.name
                    FROM boards b
                    WHERE b.id = p.board_id
                ) AS "boardName",
                (
                    SELECT COALESCE(SUM(v.value), 0)::int 
                    FROM votes v 
                    WHERE p.id = v.post_id
                ) AS score,
                (
                    SELECT COUNT(*)::int
                    FROM comments c
                    WHERE p.id = c.post_id
                ) AS "commentCount"
            FROM posts p
            JOIN users u ON p.user_id = u.id
            WHERE u.username = $1
        `, [username])

        res.json(result.rows)
    } catch (error) {
        console.error(error)
    }
})

postsRouter.get("/saved", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.status(401).json({
                message: "You are not logged in."
            })
        }

        const result = await pool.query<Post>(`
            SELECT
                p.id,
                p.title,
                p.body,
                p.created_at AS "createdAt",
                (
                    SELECT b.name
                    FROM boards b
                    WHERE b.id = p.board_id
                ) AS "boardName",
                (
                    SELECT COALESCE(SUM(v.value), 0)::int 
                    FROM votes v 
                    WHERE p.id = v.post_id
                ) AS score,
                (
                    SELECT COUNT(*)::int
                    FROM comments c
                    WHERE p.id = c.post_id
                ) AS "commentCount"
            FROM posts p
            JOIN saved_posts sp ON p.id = sp.post_id
            WHERE sp.user_id = $1
        `, [userId])

        res.json(result.rows)
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

export default postsRouter