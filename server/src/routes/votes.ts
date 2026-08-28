import { Router } from "express"
import { pool } from "../db.ts"
import type { Id, VoteValue } from "../types.ts"
import requireAuth from "../helpers/requireAuth.ts"

const votesRouter = Router()

votesRouter.post("/", requireAuth, async (req, res) => {
    try {

        const userId = req.session.userId
        const type = req.query.type

        let idType: "comment_id" | "post_id"

        if (type === "post") {
            idType = "post_id"
        } else if (type === "comment") {
            idType = "comment_id"
        } else {
            return res.status(400).json({
                message: "Invalid vote type."
            })
        }

        const { value, targetId } = req.body

        if (!value || !targetId) {
            return res.status(400).json({
                message: "Missing required values."
            })
        }

        if (value !== 1 && value !== -1) {
            return res.status(400).json({
                message: "Invalid vote value."
            })
        }

        const result = await pool.query<Id>(`
            SELECT 
                id
            FROM votes
            WHERE user_id = $1
            AND ${idType} = $2
        `, [userId, targetId])

        const voteId = result.rows[0]?.id

        if (voteId) {
            await pool.query(`
                DELETE FROM votes
                WHERE id = $1
            `, [voteId])
        }

        await pool.query(`
            INSERT INTO votes
            (user_id, value, ${idType})
            VALUES
            ($1, $2, $3)
        `, [userId, value, targetId])

        res.status(201).json({
            message: "Vote successfully created!"
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

votesRouter.delete("/", requireAuth, async (req, res) => {
    try {
        const userId = req.session.userId
        const type = req.query.type

        let idType: "comment_id" | "post_id"

        if (type === "post") {
            idType = "post_id"
        } else if (type === "comment") {
            idType = "comment_id"
        } else {
            return res.status(400).json({
                message: "Invalid vote type."
            })
        }

        const targetId = req.body.targetId

        if (!targetId) {
            return res.status(400).json({
                message: "Missing required values."
            })
        }

        const result = await pool.query<Id>(`
            DELETE FROM votes
            WHERE user_id = $1
            AND ${idType} = $2
            RETURNING id
        `, [userId, targetId])

        if (!result.rows[0]) {
            return res.status(404).json({
                message: "Vote was not found."
            })
        }

        res.json({
            message: "Vote successfully removed."
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

votesRouter.get("/:targetId", requireAuth, async (req, res) => {
    try {

        const targetId = Number(req.params.targetId)

        if (Number.isNaN(targetId)) {
            return res.status(400).json({
                message: "Invalid id."
            })
        }

        const userId = req.session.userId
        const type = req.query.type

        let idType: "comment_id" | "post_id"

        if (type === "post") {
            idType = "post_id"
        } else if (type === "comment") {
            idType = "comment_id"
        } else {
            return res.status(400).json({
                message: "Invalid vote type."
            })
        }

        if (!targetId) {
            return res.status(400).json({
                message: "Missing required values."
            })
        }

        const result = await pool.query<VoteValue>(`
            SELECT
                value
            FROM votes
            WHERE user_id = $1
            AND ${idType} = $2
        `, [userId, targetId])

        if (!result.rows[0]) {
            return res.json({
                value: 0
            })
        }

        res.json(result.rows[0])

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

export default votesRouter