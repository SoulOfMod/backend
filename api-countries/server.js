var express = require('express');

var port = 8000;
var app = express();

var cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
  res.send('Country API');
});




app.get('/countries', function (req, res) {
  var listCountries = ["France", "Afghanistan", "Åland Islands", "Albania", "Algeria"]
  res.json(listCountries);
})

app.listen(port, function () {
  console.log('Serveur lancé et en écoute dans le port: ' + port);
});