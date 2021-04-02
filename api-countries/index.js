var express = require('express');

var port = 8000;
var app = express();

//exercice 1
app.get('/', (req, res) => {
  res.send('Authors API');
});


app.get('/countries/:name', (req, res) => {
  var country = req.params.id;
  var name = "";
  var capital = "";

  switch (country) {

    case "France":
      name = "Lawrence Nowell";
      capital = "Paris"
      break;

    case "Afghanistan":
      name = "Afghanistan";
      capital = "Kabul"
      break;

    case "Åland Islands":
      name = "Åland Islands";
      capital = "Mariehamn"
      break;

    case "Albania":
      name = "Albania";
      capital = "Tirana"
      break;

    case "Algeria":
      name = "Algeria";
      capital = "Algiers"
      break;

    default:
      name = "not found"
      capital = "none"
      break;
  }
  res.json({
    name: name,
    country: country,
  });
})

app.listen(port, function () {
  console.log('Serveur lancé et en écoute dans le port: ' + port);
});