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
// error handle ke liye  show staus code
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500 // agr error kwe under kuch bhi sstaus nahi hai to hm man lenge 500

    const message = err.message || "Internal server error"

    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})