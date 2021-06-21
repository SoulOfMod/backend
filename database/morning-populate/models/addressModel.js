const mongoose = require("mongoose")


const addressSchema = mongoose.Schema({
    streetName: { type: String, required: true },
    streetNumber: { type: String, required: true },
    postCode: { type: Number, required: true },
    city: { type: String, required: true },
    created: { type: Date, default: Date.now }
})

const addressModel = mongoose.model('Address', addressSchema)

module.exports = addressModel