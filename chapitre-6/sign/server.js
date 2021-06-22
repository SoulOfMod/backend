const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userModel = require("./models/userModel")
const bcryptjs = require("bcryptjs")

mongoose.connect("mongodb://localhost:27017/login", (err) => {
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


app.post("/signup", async (req, res) => {

    try {
        const username = req.body.username
        const password = bcryptjs.hashSync(req.body.password)
        const user = await userModel.create({ username, password })

        res.json("User added", user)
    } catch (error) {
        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }
})

app.get("/signup", async (req, res) => {

    try {
        const users = await userModel.find({})

        res.json(users)
    } catch (error) {

        console.error(err)

        res.json({ errorMessage: "There was a probleme :(" }, 500)
    }
})


app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})