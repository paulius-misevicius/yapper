import "dotenv/config"
import express from "express"
import session from "express-session"
import cors from "cors"
import boardsRouter from "./routes/boards.ts"
import postsRouter from "./routes/posts.ts"
import commentsRouter from "./routes/comments.ts"
import authRouter from "./routes/auth.ts"
import usersRouter from "./routes/users.ts"
import votesRouter from "./routes/votes.ts"
import savedRouter from "./routes/saved.ts"
import membershipsRouter from "./routes/memberships.ts"

const PORT = 8000
const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }
}))
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(express.json())

app.use("/api/boards", boardsRouter)
app.use("/api/comments", commentsRouter)
app.use("/api/users", usersRouter)
app.use("/api/auth", authRouter)
app.use("/api/posts", postsRouter)
app.use("/api/votes", votesRouter)
app.use("/api/saved", savedRouter)
app.use("/api/memberships", membershipsRouter)

app.use((req, res) => {
    res.status(404).json({
        message: "No route found."
    })
})

app.listen(PORT)