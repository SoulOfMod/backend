const express = require("express")
const router = express.Router()
const { getHotels, getHotel, addHotel, changeHotel } = require("../controllers/hotelControllers")
const { validationHotels } = require("../middlewares/validationsMiddlewares")

router.get("/", getHotels)

router.get("/:id", getHotel)

router.post("/", validationHotels, addHotel)

router.put("/:id", changeHotel)


module.exports = router