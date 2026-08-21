import { Router } from "express"
import { pool } from "../db.ts"
import type { Board } from "../types.ts"

const boardsRouter = Router()

boardsRouter.get("/", async (req, res) => {
    const result = await pool.query<Board>(
        `
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
        `
    )

    res.json(result.rows)
})

export default boardsRouter