express = require('express');
server = express();

server.get('/', function (req, res) {
res.sendfile('public/index.html');
});

server.get('/new', function (req, res) {
  res.json(
    {
       tournemant: 20,
       uuid: '1232kjn3k4n343kj11234556'
    }
  );
});

server.post('/tournemant/:id/add_player', function(req, res) {
  // TODO get name from player
  // tournemant ID from routes
  // response with success
});


server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
