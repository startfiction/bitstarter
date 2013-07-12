var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(16);
buffer = fs.readFileSync('index.html');
var hello = buffer.toString('utf8', 0, len);


app.get('/', function(request, response) {
  response.send(hello)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
