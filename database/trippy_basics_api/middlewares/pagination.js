const hotelModel = require("../models/hotel")
const restaurantModel = require("../models/restaurant")

const getAllHotels = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);

        const hotels = await hotelModel.getAll(limit, skip);

        return res.status(200).json(hotels);
    } catch (e) {
        return res.status(500).json(e)
    }
}

class hotelPagination {
    getAll(limit = 5, skip = 0) {
        return hotelModel.find({})
            .skip(skip)
            .limit(limit)
    }
}


const getAllRestaurants = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);

        const restaurants = await restaurantModel.getAll(limit, skip);

        return res.status(200).json(restaurants);
    } catch (e) {
        return res.status(500).json(e)
    }
}

class restaurantPagination {
    getAll(limit = 5, skip = 0) {
        return restaurantModel.find({})
            .skip(skip)
            .limit(limit)
    }
}

module.exports = {
    getAllHotels,
    getAllRestaurants
}