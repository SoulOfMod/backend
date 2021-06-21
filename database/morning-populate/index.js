const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


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





app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})