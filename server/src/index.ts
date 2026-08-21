import "dotenv/config"
import express from "express"
import cors from "cors"
import { pool } from "./db.ts"

const PORT = 8000
const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))

interface BoardPreview {
    id: number
    name: string
    description: string
    memberCount: number
    postCount: number
    color: string
}

app.get("/api/boards", async (req, res) => {
    const result = await pool.query<BoardPreview>(
        `
            SELECT 
                b.id, 
                b.name, 
                b.description, 
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
        `
    )

    res.json(result.rows)
})

app.listen(PORT, () => console.log(`connected on ${PORT}`))