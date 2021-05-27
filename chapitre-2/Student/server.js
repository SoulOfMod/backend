const express = require("express")
const cors = require("cors")
const { students } = require("./dataStudent.js")

const app = express()

app.use(express.json()) // permet de recevoir body json dans les requetes
app.use(cors())

const port = 9000

app.get("/students", (req, res) => {
    res.json({students})
})



app.post("/students", (req, res) => {
    const newStudent = req.body

    students.push(newStudent)

    res.json({
        message: "Student registered."
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