const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');


//1
mongoose.connect("mongodb://localhost:27017/heros", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

//2


const herosSchema = mongoose.Schema({
    name: String,
    power: String,
    color: String,
    isAlive: Boolean,
    age: Number
})

const Heros = mongoose.model("Heros", herosSchema);


//3
const IronMan = new Heros({ name: "Iron Man", power: "money", color: "red", isAlive: true, age: 46 });

IronMan.save(function (err, IronMan) {
    if (err) {
        return console.error(err);
    }
    console.log("Heros ajouté!", IronMan);
});

const Thor = new Heros({ name: "Thor", power: ["electricity", "worthy"], color: "blue", isAlive: true, age: 300 });

Thor.save(function (err, Thor) {
    if (err) {
        return console.error(err);
    }
    console.log("Heros ajouté!", Thor);
});


const Daredevil = new Heros({ name: "Daredevil", power: "blind", color: "red", isAlive: false, age: 30 });

Daredevil.save(function (err, Daredevil) {
    if (err) {
        return console.error(err);
    }
    console.log("Heros ajouté!", Daredevil);
});


Heros.update({ name: 'Iron Man', power: "money" }, { "$set": { power: ["money", "intelligence"] } }, () => {
    if (!err) {
        console.log("Heros updaté");
    }
});


const herosGroup = [
    { name: "Deadpool", power: "crazy", color: ["red", "black"], isAlive: true, age: 29 },
    { name: "Spider Man", power: "spider", color: ["red", "blue"], isAlive: true, age: 24 },
];

Heros.insertMany(herosGroup, (err, result) => {
    if (!err) {
        console.log("Heros ajoutés");
        console.log(result);
    }
})

Heros.deleteMany({ name: 'Daredevil' }, () => {
    if (!err) {
        console.log("Heros effacé");
    }
});


