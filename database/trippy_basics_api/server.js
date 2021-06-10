const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Hotel = require("./model/Hotel")
const Restaurant = require("./model/Restaurant")

mongoose.connect("mongodb://localhost:27017/Trippy", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.get("/hotels", async (req, res) => {
    try {
        const hotels = await Hotel.find()

        res.json(hotels)
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})

app.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.find()

        res.json(restaurants)
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})


app.get("/hotels/:id", async (req, res) => {

    const id = req.params.id

    try {
        const hotels = await Hotel.findById(id)
        res.json(hotels)

    } catch (err) {

        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})

app.get("/restaurants/:id", async (req, res) => {

    const id = req.params.id

    try {
        const restaurants = await Restaurant.findById(id)
        res.json(restaurants)

    } catch (err) {

        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})


const findHotel = async (name) => {

    try {
        return await Hotel.findOne({
            name
        })
    } catch (error) {

    }
}

app.post("/hotels", async (req, res, next) => {

    try {
        const hotelBody = req.body
        const hotel = await findHotel(hotelBody.name)

        if (hotel) {
            res.status(400).json({
                message: "The hotel already exists"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}, async (req, res) => {

    try {
        const hotel = req.body
        // console.log(hotel);
        const newhotel = await Hotel.create(hotel)
        // console.log(newhotel);
        res.json({
            message: "Ok, hotel was created!",
        })
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})

const findRestaurant = async (name) => {

    try {
        return await Restaurant.findOne({
            name
        })
    } catch (error) {

    }
}


app.post("/restaurants", async (req, res, next) => {

    try {
        const restaurantBody = req.body
        const restaurant = await findRestaurant(restaurantBody.name)

        if (restaurant) {
            res.status(400).json({
                message: "The restaurant already exists"
            })
        } else {
            next()
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}, async (req, res) => {
    try {
        const restaurant = req.body
        // console.log(restaurant);
        const newrestaurant = await Restaurant.create(restaurant)
        // console.log(newrestaurant);
        res.json({
            message: "Ok, restaurant was created!",
        })
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})

app.put("/hotels/:id", async (req, res) => {

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
})


app.put("/restaurants/:id", async (req, res) => {

    try {
        const restaurantId = req.params.id
        const restaurantQuery = req.query
        // console.log("id", restaurantId);
        // console.log("Query", restaurantQuery);
        // console.log("Query name", restaurantQuery.name);
        const restaurant = await Restaurant.findOneAndUpdate({ _id: restaurantId },
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
})



app.get("*", (req, res) => {
    res.json({
        errorMessage: "The route was not found"
    }, 404)
})

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})