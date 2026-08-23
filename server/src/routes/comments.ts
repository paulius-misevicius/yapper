import { Router } from "express"
import { pool } from "../db.ts"
import type { Comment } from "../types.ts"

const commentsRouter = Router()

commentsRouter.get("/:postId", async (req, res) => {

    const postId = req.params.postId

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
                    SELECT SUM(v.value)::int 
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

export default commentsRouter