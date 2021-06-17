const express = require("express")
const router = express.Router()
const { getUsers, getUser, getEmail, addUser, getId } = require("../controllers/userControllers")
const { validationUsers } = require("../middlewares/validationsMiddlewares")


router.get("/", getUsers)

router.get("/:username", getUser)

router.get("/id/:id", getId)

router.get("/email/:email", getEmail)

router.post("/add", validationUsers, addUser)

module.exports = router