const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const usersRoutes = require("./controllers/user")
const User = require("./models/User")
const { body } = require('express-validator');


mongoose.connect("mongodb://localhost:27017/users", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const port = 8000

const app = express()

app.use(cors())
app.use(express.json())

// app.use("/users", usersRoutes)


app.post('/users/add',
    body("username").exists().isLength({ min: 4 }),
    body("mail").exists().isEmail(),
    body("age").exists().isNumeric().isLength({ min: 2 }),
    body("city").isIn(['Paris', 'Tokyo', 'Los Angeles']),
    (req, res) => {
        const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            res.status(500).json({
                errors: errors.array(),
                message: 'there is a problem'
            });
            return;
        } else {
            res.json({
                success: true,
                message: 'User will be saved'
            });
        }
    }
);


app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})