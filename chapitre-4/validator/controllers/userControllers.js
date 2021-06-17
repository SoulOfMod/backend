const express = require("express")
const router = express.Router()
const userModel = require("../models/userModel")
const expressValidator = require("express-validator");

router.get("/users", async (req, res) => {
    try {
        const users = await userModel.find({})

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

})

router.get("/users/:username", async (req, res) => {

    const userGet = req.params
    console.log(req.params);
    console.log(req.params.username);
    try {
        const users = await userModel.find(userGet)

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

})

router.get("/users/email/:email", async (req, res) => {

    const userFound = req.params
    console.log(req.params);
    console.log(req.params.email);
    try {
        const users = await userModel.find(userFound)

        res.json(users)
    } catch (err) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }

})


router.post('/users/add',
    (req, res) => {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({
                errors: errors.array(),
                message: 'there is a problem'
            });
            return;
        } else {
            const user = req.body
            const newUser = userModel.create(user)

            res.json({
                success: true,
                message: 'User will be saved'
            });
        }
    }
);


module.exports = {
    getUsers,
    getUser,
    getEmail,
    addUser
}