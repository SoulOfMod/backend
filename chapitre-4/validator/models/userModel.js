const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        min: [4, "l'username est trop court "]

    },
    email: String,
    age: {
        type: Number,
        min: 2,
        required: [true, 'Veuiller entrer un age']
    },
    city: {
        type: String,
        enum: ["Paris", "Tokyo ", "Los Angeles"]
    },
    date: { type: Date, default: Date.now }
})

const userModer = mongoose.model("User", userSchema)

module.exports = userModer