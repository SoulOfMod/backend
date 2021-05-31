const express = require("express")
const cors = require("cors")
const { heros } = require("./dataHeros.js")

const app = express()

app.use(express.json()) // permet de recevoir body json dans les requetes
app.use(cors())

const port = 8000



function debug(req, res, next) {
    console.log("Je fais un console.log à chaque requête")
};



app.get('/', (req, res) => {
    res.send('Tape Heros dans la bar');
});

app.get("/heros", (req, res) => {

    // console.log(heros);

    res.json({ heros })

})

app.get("/heros/:id", (req, res) => {
    const id = parseInt(req.params.id)

    // console.log("heros id", id);

    // herosGet = []

    // for (let i = 0; i < heros.length; i++) {
    //     const curHeros = heros[i];
    //     console.log(curHeros);

    //     if (curHeros.id === id) {
    //         herosGet.push(curHeros)
    //     }

    // }



    // console.log(herosGet);

    const herosfind = heros.find(elem => elem.id === id)

    res.json({
        herosfind
    })
})


app.get("/heros/:id/powers", (req, res) => {
    const id = parseInt(req.params.id)

    const herosfind = heros.find(elem => elem.id === id)
    const herospower = herosfind.power

    // console.log(heros["power"]);
    // console.log(heros.power);

    res.json({
        herospower
    })
})

app.post("/heros", (req, res) => {
    const newHeros = req.body

    heros.push(newHeros)

    res.json({
        message: "OK heros ajouté."
    })
})

app.post("/heros/:id/powers", (req, res) => {
    // const newPower = req.body

    // heros.push(newPower)

    // res.json({
    //     message: "Pouvoir ajouté!"
    // })
    const id = parseInt(req.params.id)
    const power = req.body.power

    const herofind = heros.find(elem => {
        if (elem.id === id) {
            return elem.power.push(power)
        }
    })

    res.json({
        message: "Pouvoir ajouté!"
    })

})

app.delete('/heros/:id', (req, res) => {

    const id = parseInt(req.params.id)

    if (id !== -1) {
        heros.splice(id, 1);
        res.json({
            message: "Heros retiré!"
        })
    } else {
        res.json({
            message: "Erreur,ID introuvable!"
        })
    }
});

app.put('/heros/:id', (req, res) => {
    const id = req.params;
    const changeheros = req.body;

    heros = heros.find(elem => elem.id == id);

    heros.changeheros = changeheros;

    res.json(heros);
});

app.delete("/heros/:id/powers", (req, res) => {
    const id = parseInt(req.params.id)
    const power = req.body.power

    const herofind = heros.find(elem => {
        if (elem.id === id) {
            return elem.power.splice(power, 1)
        }
    })

    res.json({
        message: "Pouvoir ajouté!"
    })

})

// gestion d'erreurs
app.get('*', (req, res) => {
    res.json({
        errorMessage: "The route doesn't exist :'("
    })
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})


