import { Router } from "express"
import { pool } from "../db.ts"
import type { Board, BoardRule, Post } from "../types.ts"

const boardsRouter = Router()

boardsRouter.get("/", async (req, res) => {
    try {
        const result = await pool.query<Board>(`
            SELECT 
                b.id, 
                b.name, 
                b.description, 
                b.color, 
                b.created_at AS "createdAt",
                (
                    SELECT COUNT(*)::int 
                    FROM board_memberships bm 
                    WHERE b.id = bm.board_id
                ) AS "memberCount",
                (
                    SELECT COUNT(*)::int 
                    FROM posts p 
                    WHERE b.id = p.board_id
                ) AS "postCount" 
            FROM boards b
            ORDER BY b.id
        `)
    
        res.json(result.rows)
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

boardsRouter.get("/:boardName", async (req, res) => {

    const board = req.params.boardName

    try {
        const [boardInfo, boardRules] = await Promise.all([
            pool.query<Board>(`
                SELECT
                    b.id,
                    b.name,
                    b.description,
                    b.created_at AS "createdAt",
                    b.color,
                    (
                        SELECT COUNT(*)::int 
                        FROM board_memberships bm 
                        WHERE b.id = bm.board_id
                    ) AS "memberCount",
                    (
                        SELECT COUNT(*)::int 
                        FROM posts p 
                        WHERE b.id = p.board_id
                    ) AS "postCount"
                FROM boards b
                WHERE b.name = $1
            `, [board]),
        
            pool.query<BoardRule>(`
                SELECT br.rule
                FROM board_rules br
                JOIN boards b ON b.id = br.board_id
                WHERE b.name = $1
            `, [board])
        ])

        if (!boardInfo.rows[0]) {
            return res.status(404).json({
                error: "Board not found"
            })
        }
        
        const result = {
            ...boardInfo.rows[0],
            rules: boardRules.rows.map(item => item.rule)
        }
    
        res.json(result)
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

boardsRouter.get("/:boardName/:postId", async (req, res) => {

    const boardName = req.params.boardName
    const postId = Number(req.params.postId)

    try {
        const result = await pool.query<Post>(`
            SELECT
            p.id,
            p.flair,
            p.title,
            p.body,
            p.created_at as "createdAt",
            u.username as "authorUsername",
            (
                SELECT SUM(v.value)::int 
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
            JOIN boards b ON p.board_id = b.id
            WHERE p.id = $1
            AND b.name = $2
        `, [postId, boardName])


        if (!result.rows[0]) {
            return res.status(404).json({
                error: "Post not found"
            })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

export default boardsRouter