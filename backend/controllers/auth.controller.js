import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"
export const signup = async (req, res, next) => {

    const { username, email, password } = req.body
    // console.log(req.body)

    if (!username || !email || !password || username === "" || email === "" || password === "") {

        // return res.status(400).json({ message: "All Field are required" })
        return next(errorHandler(400, "All fields are required"))
    }

    //bcrypt se password dikhae nahi dega
    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })

    try {
        await newUser.save()
        res.json("Signup successful")

    } catch (error) {
        // res.status(500).json({ message: error.message })
        next(error)

    }

}

export const signin = async (req, res, next) => {
    const { email, password } = req.body
    // console.log(req.body)

    if (!email || !password || email === "" || password === "") {

        // return res.status(400).json({ message: "All Field are required" })
        return next(errorHandler(400, "All fields are required"))
    }

    //bcrypt se password dikhae nahi dega
    // const hashedPassword = bcryptjs.hashSync(password, 10)

    try {
        const validUser = await User.findOne({ email })

        if (!validUser) {
            return next(errorHandler(404, "User not found"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, "Wrong Credentials"))
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)

        const { password: pass, ...rest } = validUser._doc

        res.status(200).cookie("access_token", token, { httpOnly: true }).json(rest)



    } catch (error) {
        next(error)

    }

}

//for google 
export const google = async (req, res, next) => {
    const { email, name, profilePhotoUrl } = req.body
    try {
        const user = await User.findOne({ email })

        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            const { password: pass, ...rest } = user._doc
            return res.status(200).cookie("access_token", token, {
                httpOnly: true,
            })
                .json(rest)
        }

        const generatedPassword =
            Math.random().toString(36).slice(-8) +
            Math.random().toString(36).slice(-8)

        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10)
        //1. vikash 2. kumar : display name
        const newUser = new User({
            username: name.toLowerCase().split(" ").join("") +
                Math.random().toString(9).slice(-4),
            email,
            password: hashedPassword,
            profilePicture: profilePhotoUrl,
        })

        await newUser.save()
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = newUser._doc
        return res
            .status(200)
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .json(rest)

    } catch (error) {
        next(error)

    }
}

