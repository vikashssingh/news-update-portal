import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js"

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database is connected")
    })
    .catch((err) => {
        console.log(err)
    })

//for allowing json object in req body
app.use(express.json())
app.listen(5000, () => {
    console.log("server is running port number 5000")
})

app.use("/api/auth", authRoutes)