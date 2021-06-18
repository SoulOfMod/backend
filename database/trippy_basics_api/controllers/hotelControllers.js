const hotelModel = require("../models/hotel")
const expressValidator = require("express-validator");

const getHotels = async (req, res) => {
    try {
        const hotels = await hotelModel.find().lean()

        res.json(hotels)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getHotel = async (req, res) => {
    try {
        const idHotel = req.params.id
        const hotel = await hotelModel.findById(idHotel).lean()

        res.json(hotel)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addHotel = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newHotel = await hotelModel.create(req.body)

            res.json({ message: "The hotel was added!", newHotel })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const changeHotel = async (req, res) => {

    try {
        const hotelId = req.params.id
        const hotelQuery = req.query
        // console.log("id", hotelId);
        // console.log("Query", hotelQuery);
        // console.log("Query name", hotelQuery.name);
        const hotel = await Hotel.findOneAndUpdate({ _id: hotelId },
            { $set: {name: hotelQuery.name } },
            { new: true }
        )


        if (hotel) {
            res.json({
                message: `The hotel's name is updated to ${hotelQuery.name}`
            })
        }


    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getHotels,
    getHotel,
    addHotel,
    changeHotel
}