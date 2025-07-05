import express from "express"
import { signup } from "../controllers/auth.controller.js"
const router = express.Router()
//send to database 
router.post("/signup", signup)





export default router