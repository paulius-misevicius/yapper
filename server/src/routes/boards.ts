import { Router } from "express"
import { pool } from "../db.ts"
import type { Board } from "../types.ts"

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
            pool.query(`
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
        
            pool.query(`
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

export default boardsRouter