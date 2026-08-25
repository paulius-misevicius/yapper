import { Router } from "express"
import { checkPasswordRegex, checkUsernameRegex } from "../utils.ts"
import { pool } from "../db.ts"
import validator from "validator"
import bcrypt from "bcryptjs"
import type { Email, Id, User, UserLogin, Username } from "../types.ts"

const authRouter = Router()

authRouter.post("/register", async (req, res) => {
    try {
        let { username, email, password } = req.body

        if (!username || !email || !password ) {
            return res.status(400).json({
                message: "All fields are required."
            })
        }

        username = username.trim()
        email = email.trim().toLowerCase()

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                message: "Invalid email format."
            })
        }

        const usernameError = checkUsernameRegex(username)

        if (usernameError) {
            return res.status(400).json({
                message: usernameError
            })
        }

        const passwordError = checkPasswordRegex(password)

        if (passwordError) {
            return res.status(400).json({
                message: passwordError
            })
        }

        const usernameResult = await pool.query<Username>(`
            SELECT u.username
            FROM users u
            WHERE u.username = $1
        `, [username])

        if (usernameResult.rows[0]) {
            return res.status(400).json({
                message: "Username is already taken."
            })
        }

        const emailResult = await pool.query<Email>(`
            SELECT u.email
            FROM users u
            WHERE u.email = $1
        `, [email])

        if (emailResult.rows[0]) {
            return res.status(400).json({
                message: "User with this email address already exists."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await pool.query<Id>(`
            INSERT INTO users
            (username, email, password_hash)
            VALUES 
            ($1, $2, $3)
            RETURNING id
        `, [username, email, hashedPassword])

        req.session.userId = newUser.rows[0].id

        res.status(201).json({
            message: "Your account has been successfully registered!"
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

authRouter.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username) {
            return res.status(400).json({
                message: "Username is missing."
            })
        }
        if (!password) {
            return res.status(400).json({
                message: "Password is missing."
            })
        }

        const result = await pool.query<UserLogin>(`
            SELECT
                u.id,
                u.password_hash as "passwordHash"
            FROM users u
            WHERE u.username = $1
            AND u.is_deleted IS FALSE
        `, [username])

        const user = result.rows[0]

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials."
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid credentials."
            })
        }

        req.session.userId = user.id

        res.json({
            message: "Log in successful"
        })

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

authRouter.get("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            return res.status(500).json({ message: "Could not log out." });
        }

        res.json({
            message: "User logged out."
        })
    })
})

authRouter.get("/me", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.json({
                user: null
            })
        }

        const result = await pool.query<User>(`
            SELECT
                u.id,
                u.username,
                u.bio,
                u.email,
                u.theme,
                u.profile_picture_url AS "profilePictureUrl",
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
                    SELECT ARRAY(
                        SELECT sp.post_id
                        FROM saved_posts sp
                        WHERE sp.user_id = u.id
                    )
                ) AS "savedPostIds",
                (
                    SELECT ARRAY(
                        SELECT b.name
                        FROM boards b
                        JOIN board_memberships bm ON bm.board_id = b.id
                        WHERE bm.user_id = u.id
                    )
                ) AS "joinedBoardNames"
            FROM users u
            WHERE u.id = $1
        `, [userId])
        
        res.json({
            user: result.rows[0]
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

authRouter.patch("/me", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.json({
                user: null
            })
        }

        const type = req.query.type

        if (type !== "username" && type !== "email" && type !== "password") {
            return res.status(400).json({
                message: "Invalid type."
            })
        }

        const newValue = req.body.newValue

        if (!newValue) {
            return res.status(400).json({
                message: "Missing required fields."
            })
        }

        if (type === "username") {
            const username = newValue.trim()

            const usernameError = checkUsernameRegex(username)

            if (usernameError) {
                return res.status(400).json({
                    message: usernameError
                })
            }

            const result = await pool.query<Id>(`
                SELECT id
                FROM users
                WHERE username = $1
            `, [username])

            if (result.rows[0]) {
                return res.status(400).json({
                    message: "Username already taken."
                })
            }

            await pool.query(`
                UPDATE users
                SET username = $1
                WHERE id = $2
            `, [username, userId])

            return res.json({
                username,
                message: "Your username was successfully updated!"
            })
        }

        if (type === "email") {
            const email = newValue.trim().toLowerCase()

            if (!validator.isEmail(email)) {
                return res.status(400).json({
                    message: "Invalid email format."
                })
            }

            const result = await pool.query<Id>(`
                SELECT id
                FROM users
                WHERE email = $1
            `, [email])

            if (result.rows[0]) {
                return res.status(400).json({
                    message: "Account with this email address already exists."
                })
            }

            await pool.query(`
                UPDATE users
                SET email = $1
                WHERE id = $2
            `, [email, userId])

            return res.json({
                email,
                message: `Your email address was successfully updated!`
            })
        }

        if (type === "password") {
            const password = newValue
            const passwordError = checkPasswordRegex(password)

            if (passwordError) {
                return res.status(400).json({
                    message: passwordError
                })
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            await pool.query(`
                UPDATE users
                SET password_hash = $1
                WHERE id = $2
            `, [hashedPassword, userId])

            return res.json({
                message: `Your password was successfully updated!`
            })
        }

    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

authRouter.delete("/delete", async (req, res) => {
    try {
        const userId = req.session.userId

        if (!userId) {
            return res.json({
                user: null
            })
        }

        const username = req.body.username

        if (!username) {
            return res.status(400).json({
                message: "Missing required fields."
            })
        }

        const result = await pool.query<Id>(`
            UPDATE users
            SET
                username = 'deleted_user_' || id,
                email = 'deleted_user_' || id || '@deleted.local',
                bio = NULL,
                profile_picture_url = NULL,
                is_deleted = TRUE
            WHERE id = $1
            AND username = $2
            RETURNING id
        `, [userId, username])

        if (!result.rows[0]) {
            return res.status(400).json({
                message: "Incorrect username."
            })
        }

        req.session.destroy(error => {
            if (error) {
                console.error(error)

                return res.status(500).json({
                    message: "Account was deleted, but session cleanup failed."
                })
            }

            res.json({
                message: "Account was successfully deleted."
            })
        })

    } catch (error) {
        console.error(error)
        
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

export default authRouter