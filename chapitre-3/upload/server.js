const express = require('express');
const multer = require('multer');
const cors = require("cors")
const mongoose = require('mongoose');
const User = require("./model/User")


const upload = multer({ dest: 'public/uploads/' });


mongoose.connect("mongodb://localhost:27017/user", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const port = 8000

const app = express();

app.use(cors())

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);


    res.send("ok");
});

app.listen(port, () => {
    console.log("The server is listing in the port: ", port)
})