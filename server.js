var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile('public/index.html');
});

app.get('/new', function (req, res) {
  res.sendfile('public/new.html');
});

app.post('/tournament/:id/add_players', function(req, res) {
  var post_data = req.body;
  res.json(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
