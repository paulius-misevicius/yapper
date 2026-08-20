import express from "express"
import cors from "cors"

const PORT = 8000
const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.get("/", (req, res) => {
    res.json(
        {data: "data"}
    )
})

app.listen(PORT, () => console.log(`connected on ${PORT}`))