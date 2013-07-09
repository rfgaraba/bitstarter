var express = require('express');
var fs = require('fs');

var contents = fs.readFileSync('index.html');

console.log("String on file is " + contents);

var buffer = new Buffer(contents);
var encodded = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(encodded);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
