const express = require("express")
const router = express.Router()
const { getUsers, getUser, addUser, changeUser, deleteUser } = require("../controllers/userControllers")

router.get("/", getUsers)

router.get("/:id", getUser)

router.post("/", addUser)

router.put("/:id", changeUser)

router.delete("/:id", deleteUser)


module.exports = router