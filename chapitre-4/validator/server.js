const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const usersRoutes = require("./controllers/user")
const userModel = require("../models/user")
const router = express.Router()

mongoose.connect("mongodb://localhost:27017/users", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const port = 8000

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", usersRoutes)

router.post("/users/add", debug, async (req, res) => {
    try {
        const newUser = req.body

        const student = new userModel({
            name: newUser.name,
            email: newUser.email,
            age: newUser.age,
            city: newUser.city
        })

        const userSaved = await user.save()

        res.json({
            message: "The user was saved correctly",
            newUser
        })

    } catch (error) {
        console.error("Error in POST /users", error)

        res.json({
            message: "The user was not saved :("
        })
    }

})

const debug = (req, res, next) => {
    console.log("I received a request on user controller")
    console.log(`The route is: ${req.originalUrl} and the method is ${req.method}`)
    next()
}


app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})