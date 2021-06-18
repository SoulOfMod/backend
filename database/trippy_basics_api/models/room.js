const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    people: Number,
    price: Number,
    hasBathroom: Boolean,
    created: { type: Date, default: Date.now }
})

const roomModel = mongoose.model("Room", roomSchema)

module.exports = roomModel