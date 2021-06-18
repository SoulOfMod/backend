const restaurantModel = require("../models/restaurant")
const expressValidator = require("express-validator");

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find().lean()

        res.json(restaurants)

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const getRestaurant = async (req, res) => {
    try {
        const idRestaurant = req.params.id
        const restaurant = await restaurantModel.findById(idRestaurant).lean()

        res.json(restaurant)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addRestaurant = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newRestaurant = await restaurantModel.create(req.body)

            res.json({ message: "The restaurant was added!", newRestaurant })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const changeRestaurant = async (req, res) => {

    try {
        const restaurantId = req.params.id
        const restaurantQuery = req.query
        // console.log("id", restaurantId);
        // console.log("Query", restaurantQuery);
        // console.log("Query name", restaurantQuery.name);
        const restaurant = await restaurantModel.findOneAndUpdate({ _id: restaurantId },
            { $set: {name: restaurantQuery.name } },
            { new: true }
        )


        if (restaurant) {
            res.json({
                message: `The restaurant's name is updated to ${restaurantQuery.name}`
            })
        }


    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deleteRestaurant = async (req, res) => {

    try {
        const restaurantId = req.params.id
        const restaurantQuery = req.query
        // console.log("id", restaurantId);
        // console.log("Query", restaurantQuery);
        // console.log("Query name", restaurantQuery.name);
        const restaurant = await restaurantModel.remove({ _id: restaurantId })


        if (restaurant) {
            res.json({
                message: `The restaurant was removed`
            })
        }


    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = {
    getRestaurants,
    getRestaurant,
    addRestaurant,
    changeRestaurant,
    deleteRestaurant
}