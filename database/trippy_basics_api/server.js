const express = require("express")
const mongoose = require("mongoose")
const hotelRoutes = require("./routes/hotelRoutes")
const restaurantRoutes = require("./routes/restaurantRoutes")
const userRoutes = require("./routes/userRoutes")

mongoose.connect("mongodb://localhost:27017/Trippy", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There was a problem when connection to the database")
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()

app.use(express.json())

app.use("/hotels", hotelRoutes)
app.use("/restaurants", restaurantRoutes)
app.use("/users", userRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})