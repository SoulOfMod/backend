const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');


//1
mongoose.connect("mongodb://localhost:27017/garage", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

//2


const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
})

const Cars = mongoose.model("Car", carSchema);


//3
const renaultEspace = new Cars({ brand: "Renault", model: "Espace", year: 1999 });

renaultEspace.save(function (err, renaultEspace) {
    if (err) {
        return console.error(err);
    }
    console.log("Document inserted succussfully!", renaultEspace);
});

//Après test marche,les 2 autres voitures

const renaultScenic = new Cars({ brand: "Renault", model: "Scenic", year: 2004 });

renaultScenic.save(function (err, renaultScenic) {
    if (err) {
        return console.error(err);
    }
    console.log("Document inserted succussfully!", renaultScenic);
});

const peugeot308 = new Cars({ brand: "Peugeot", model: "308", year: 2017 });

peugeot308.save(function (err, peugeot308) {
    if (err) {
        return console.error(err);
    }
    console.log("Document inserted succussfully!", peugeot308);
});

//4

const id = '60be1dfde4ed523f68741623';

Cars.findById(id, function (err, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Result of findbyId : ", result);
    }
})

//5

// const id = '60be1dfde4ed523f68741623';

// Cars.findById(id, function (err) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         {year : 2000}
//     }
// })

// const idEspace = '60be1dfde4ed523f68741623';

// Cars.findByIdAndUpdate(idEspace, { year: 2000 })

// const query = { model: 'Espace', year: 1999 };
// Cars.update(query, { year: 2000 })

// Cars.updateMany({ model: 'Espace', year: 1999 }, { year: 2000 });

// Cars.updateMany({ model: 'Espace', year: 1999}, { "$set": { year: 2000} },()=>{});

Cars.update({ model: 'Espace', year: 1999 }, { "$set": { year: 2000 } }, () => { });

//6

Cars.deleteMany({ brand: 'Renault' }, () => { });

//bonus

const newCar = [
    { brand: 'Aston Martin', model: "BD9", year: 2010 }, 
    { brand: 'Range Rover', model: "Discovery Sport", year: 2017 }
];

Cars.insertMany(newCar, (err,carName) => {
    if(!err){
        console.log("Modifications effectuées");
        console.log(carName);
    }
})