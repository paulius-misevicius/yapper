import { Router } from "express"
import { pool } from "../db.ts"
import type { Comment, Id } from "../types.ts"

const commentsRouter = Router()

commentsRouter.get("/:postId", async (req, res) => {

    const postId = Number(req.params.postId)

    if (Number.isNaN(postId)) {
        return res.status(400).json({
            message: "Invalid post id."
        })
    }

    try {
        const result = await pool.query<Comment>(`
            SELECT 
                c.id,
                u.username AS "authorUsername",
                u.profile_picture_url AS "profilePictureUrl",
                c.parent_comment_id AS "parentCommentId",
                c.body,
                c.created_at AS "createdAt",
                (
                    SELECT COALESCE(SUM(v.value), 0)::int 
                    FROM votes v 
                    WHERE c.id = v.comment_id
                ) AS score
            FROM comments c
            JOIN users u ON c.user_id = u.id
            WHERE c.post_id = $1
        `, [postId])

        res.json(result.rows)
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

commentsRouter.post("/:postId", async (req, res) => {
    try {

        const userId = req.session.userId
        
        if (!userId) {
            return res.status(401).json({
                message: "You are not logged in."
            })
        }

        const postId = Number(req.params.postId)

        if (Number.isNaN(postId)) {
            return res.status(400).json({
                message: "Invalid post id."
            })
        }

        const { body, parentCommentId } = req.body

        if (!body) {
            return res.status(400).json({
                message: "Missing required fields."
            })
        }

        const result = await pool.query<Id>(`
            INSERT INTO comments
            (user_id, post_id, parent_comment_id, body)
            VALUES
            ($1, $2, $3, $4)
            RETURNING id
        `, [userId, postId, parentCommentId, body])

        res.status(201).json({
            commentId: result.rows[0].id,
            message: "Comment was successfully created!"
        })

    } catch (error) {
        console.error (error)

        return res.status(500).json({
            error: "Internal server error"
        })
    }
})

export default commentsRouter