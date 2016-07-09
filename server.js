express = require('express');
server = express();

server.get('/', function (req, res) {
res.sendfile('public/index.html');
});

server.get('/new', function (req, res) {
  res.sendfile('public/new.html');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
