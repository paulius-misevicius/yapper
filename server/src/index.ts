import "dotenv/config"
import express from "express"
import cors from "cors"
import boardsRouter from "./routes/boards.ts"
import postsRouter from "./routes/posts.ts"
import commentsRouter from "./routes/comments.ts"

const PORT = 8000
const app = express()

app.use(cors({origin: process.env.CLIENT_URL}))

app.use("/api/boards", boardsRouter)
app.use("/api/posts", postsRouter)
app.use("/api/comments", commentsRouter)

app.listen(PORT)