const express = require("express")
const router = express.Router()
const { getRestaurants, getRestaurant, addRestaurant, changeRestaurant, deleteRestaurant } = require("../controllers/restaurantControllers")
const { validationRestaurants } = require("../middlewares/validationsMiddlewares")

router.get("/", getRestaurants)

router.get("/:id", getRestaurant)

router.post("/", validationRestaurants,addRestaurant)

router.put("/:id", changeRestaurant)

router.delete("/:id", deleteRestaurant)

module.exports = router
