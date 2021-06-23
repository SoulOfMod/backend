const userModel = require("../models/user")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config.js")

const signup = async (req, res) => {
    try {
        const email = req.body.email
        const password = bcryptjs.hashSync(req.body.password)
        const firstName = req.body.firstName
        const surname = req.body.surname
        const dateOfBirth = req.body.dateOfBirth

        const user = await userModel.create({ email, password, firstName, surname, dateOfBirth })

        res.json({ message: "User was created!", user })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const login = async (req, res) => {
    try {
        const email = req.body.email
        const user = await userModel.findOne({ email })

        const result = bcryptjs.compareSync(req.body.password, user.password)

        if (result) {
            const token = jwt.sign(
                {
                    id: user._id
                }, config.secret
            )

            res.json({ message: "You're now login!", token })
        } else {
            res.status(401).json({ message: "Login failed" })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

module.exports = { signup, login }