const express = require('express');
const cors = require("cors")
const countries = require("./dataCountries.js")

const app = express();

app.use(cors())


const port = 8000;
app.get("/countries", function (req, res) {
    console.log("countries", countries)
    res.json({
        countries
    })
})

app.get('/countries/:country', (req, res) => {

    const country = req.params.country.toUpperCase()

    
    const countryFind = []

    for (let i = 0; i < countries.length; i++) {
        const curCountry = countries[i];

        if (curCountry.name.toUpperCase() === country) {
            countryFind.push(curCountry)
        }
    }

    console.log("country", countryFind);

    res.json({
        countryFind
    })
})

app.listen(port, function () {
    console.log('Serveur lancé et en écoute dans le port: ' + port);
});