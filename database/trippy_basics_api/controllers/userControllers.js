const userModel = require("../models/user")
const expressValidator = require("express-validator");

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().lean()

        res.json(users)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getUser = async (req, res) => {
    try {
        const idUser = req.params.id
        const user = await userModel.findById(idUser).lean()

        res.json(user)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addUser = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newuser = await userModel.create(req.body)

            res.json({ message: "The user was added!", newuser })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const changeUser = async (req, res) => {

    try {
        const userId = req.params.id
        const userQuery = req.query
        const user = await userModel.findOneAndUpdate({ _id: userId },
            { $set: {firstName: userQuery.firstName } },
            { new: true }
        )


        if (user) {
            res.json({
                message: `The user's name is updated to ${userQuery.firstName}`
            })
        }


    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deleteUser = async (req, res) => {

    try {
        const userId = req.params.id
        const userQuery = req.query
        // console.log("id", userId);
        // console.log("Query", userQuery);
        // console.log("Query name", userQuery.name);
        const user = await userModel.remove({ _id: userId })


        if (user) {
            res.json({
                message: `The user was removed`
            })
        }


    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    changeUser,
    deleteUser
}