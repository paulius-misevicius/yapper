import { Router } from "express"
import { pool } from "../db.ts"
import type { Id, SavedPost } from "../types.ts"

const savedRouter = Router()

savedRouter.post("/", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.status(401).json({
                message: "You are not logged in."
            })
        }

        const postId = req.body.postId

        if (!postId) {
            return res.status(400).json({
                message: "Invalid post id."
            })
        }

        const result = await pool.query<SavedPost>(`
            SELECT *
            FROM saved_posts
            WHERE user_id = $1
            AND post_id = $2
        `, [userId, postId])

        if (result.rows[0]) {
            return res.status(409).json({
                message: "Saved post entry already exists."
            })
        }

        await pool.query(`
            INSERT INTO saved_posts
            (user_id, post_id)
            VALUES
            ($1, $2)
        `, [userId, postId])

        res.json({
            message: "Post successfully saved!"
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

savedRouter.delete("/", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.status(401).json({
                message: "You are not logged in."
            })
        }

        const postId = req.body.postId

        if (!postId) {
            return res.status(400).json({
                message: "Invalid post id."
            })
        }
        
        const result = await pool.query<Id>(`
            DELETE FROM saved_posts
            WHERE user_id = $1
            AND post_id = $2
            RETURNING id
        `, [userId, postId])
            
        if (!result.rows[0]) {
            return res.status(404).json({
                message: "Post's save record was not found."
            })
        }

        res.json({
            message: "Successfully removed from saved posts."
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

export default savedRouter