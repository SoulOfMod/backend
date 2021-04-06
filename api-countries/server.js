var express = require('express');

var port = 8000;
var app = express();


app.get('/', (req, res) => {
  res.send('Country API');
});

var listCountry = ["France", "Afghanistan", "Åland Islands", "Albania", "Algeria"]



app.get('/countries', (req, res) => {
  res.json(listCountry);
})

app.listen(port, function () {
  console.log('Serveur lancé et en écoute dans le port: ' + port);
});