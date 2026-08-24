import { Router } from "express"
import { pool } from "../db.ts"
import type { BoardMembership, Id } from "../types.ts"

const membershipsRouter = Router()

membershipsRouter.post("/", async (req, res) => {
    try {
        const userId = req.session.userId
        
        if (!userId) {
            return res.status(401).json({
                message: "You are not logged in."
            })
        }

        const boardId = req.body.boardId

        if (!boardId) {
            return res.status(400).json({
                message: "Invalid board id."
            })
        }

        const result = await pool.query<BoardMembership>(`
            SELECT *
            FROM board_memberships
            WHERE user_id = $1
            AND board_id = $2
        `, [userId, boardId])

        if (result.rows[0]) {
            return res.status(409).json({
                message: "Board membership already exists."
            })
        }

        await pool.query(`
            INSERT INTO board_memberships
            (user_id, board_id)
            VALUES
            ($1, $2)
        `, [userId, boardId])

        res.json({
            message: "Board membership successfully added!"
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

membershipsRouter.delete("/", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.status(401).json({
                message: "You are not logged in."
            })
        }

        const boardId = req.body.boardId

        if (!boardId) {
            return res.status(400).json({
                message: "Invalid board id."
            })
        }
        
        const result = await pool.query<Id>(`
            DELETE FROM board_memberships
            WHERE user_id = $1
            AND board_id = $2
            RETURNING id
        `, [userId, boardId])
            
        if (!result.rows[0]) {
            return res.status(404).json({
                message: "Board membership record was not found."
            })
        }

        res.json({
            message: "Successfully removed board membership."
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

export default membershipsRouter