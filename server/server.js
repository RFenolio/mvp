var express = require('express');
var requestHandlers = require('./request-handler');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8000);

module.exports = app;