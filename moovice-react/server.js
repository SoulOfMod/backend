var express = require('express');
var port = 8000;
var app = express();
​
// const popularMovies = require("./dataPopular.js")
​
var cors = require('cors')
app.use(cors())
​
app.get('/', (req, res) => {
    res.send("My HomePage");
});
​
​
//   app.get('/Weekly', (req, res) => {
//       res.send('Weekly');
//   });
​
//   app.get('/WeeklyBattle', (req, res) => {
//       res.send('WeeklyBattle');
//   });
​
​
// app.get('/Popular', (req, res) => {
//     res.json({
//         popularMovies
//     })
//     console.log("popularMovies", popularMovies);
// });
​
//   app.get('/PopularBattle', function(req, res) {
//       res.send("PopularBattle");
//   });
​
//   app.get('/Favorites', (req, res) => {
//     res.send('Favorites');
// });
​
​
​
//   app.get('/hello/:name', (req, res) => {
//       let name = req.params.name;
​
//       res.json({
//           message: `Hello ${name}!`,
//       });
//   });
​
​
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});