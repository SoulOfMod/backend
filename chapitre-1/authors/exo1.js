var express = require('express');

var port = 8000;
var app = express();

//exercice 1
app.get('/', (req, res) => {
  res.send('Authors API');
});





//exercice 2
app.get('/authors/:id', (req, res) => {
  var authors = req.params.id;
  var name = "";
  var country = "";

  switch (authors) {

    case "1":
      res.send('Lawrence Nowell, UK');
      break;

    case "2":
      res.send('William Shakespeare, UK');
      break;

    case "3":
      res.send('Charles Dickens, US');
      break;

    case "4":
      res.send('Oscar Wilde, UK');
      break;

    default:
      res.send('Not Found');
      break;
  }
})


//exercice 3
app.get('/authors/:number/books/', (req, res) => {
  var authors = req.params.number;
  var books = "";

  switch (authors) {

    case "1":
      res.send('Beowulf');
      break;

    case "2":
      res.send('Hamlet, Othello, Romeo and Juliet, MacBeth');
      break;

    case "3":
      res.send('Oliver Twist, A Christmas Carol');
      break;

    case "4":
      res.send('The Picture of Dorian Gray, The Importance of Being Earnest');
      break;

    default:
      books = "not found"
      break;
  }

});




//exercice 4
app.get('/json/authors/:id', (req, res) => {
  var authors = req.params.id;
  var name = "";
  var country = "";

  switch (authors) {

    case "1":
      name = "Lawrence Nowell";
      country = "UK"
      break;

    case "2":
      name = "William Shakespeare";
      country = "UK"
      break;

    case "3":
      name = "Charles Dickens";
      country = "US"
      break;

    case "4":
      name = "Oscar Wilde";
      country = "UK"
      break;

    default:
      name = "not found"
      country = "none"
      break;
  }
  res.json({
    name: name,
    country: country,
  });
})

app.get('/json/authors/:number/books/', (req, res) => {
  var authors = req.params.number;
  var books = "";

  switch (authors) {

    case "1":
      books = "Beowulf";
      break;

    case "2":
      books = "Hamlet, Othello, Romeo and Juliet, MacBeth";
      break;

    case "3":
      books = "Oliver Twist, A Christmas Carol";
      break;

    case "4":
      books = "The Picture of Dorian Gray, The Importance of Being Earnest";
      break;

    default:
      books = "not found"
      break;
  }

  res.json({
    books: [books],
  });
});

app.listen(port, function () {
  console.log('Serveur lancé et en écoute dans le port: ' + port);
});