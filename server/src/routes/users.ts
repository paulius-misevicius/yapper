import { Router } from "express"
import { pool } from "../db.ts"

const usersRouter = Router()

usersRouter.get("/:username", async (req, res) => {
    try {
        const username = req.params.username

        const result = await pool.query(`
            SELECT
                u.id,
                u.username,
                u.profile_picture_url AS "profilePictureUrl",
                u.bio,
                u.joined_at AS "joinedAt",
                (
                    SELECT COUNT(*)::int
                    FROM posts p
                    WHERE u.id = p.user_id
                ) AS "postCount",
                (
                    SELECT COUNT(*)::int
                    FROM comments c
                    WHERE u.id = c.user_id
                ) AS "commentCount",
                (
                    SELECT COALESCE(SUM(v.value), 0)::int
                    FROM votes v
                    WHERE v.post_id IN (
                        SELECT p.id
                        FROM posts p
                        WHERE p.user_id = u.id
                    )
                    OR v.comment_id IN (
                        SELECT c.id
                        FROM comments c
                        WHERE c.user_id = u.id
                    )
                ) AS karma,
                (
                    SELECT COUNT(*)
                    FROM board_memberships bm
                    WHERE bm.user_id = u.id
                ) AS "joinedBoardCount"
            FROM users u
            WHERE u.username = $1
        `, [username])

        if (!result.rows[0]) {
            return res.status(404).json({
                message: "User not found."
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

export default usersRouter