var express = require('express');
var cors = require('cors');
var requestHandlers = require('./request-handlers');

var app = express();

app.use(cors());
app.use(express.static(__dirname + '/../client'));

app.listen(8000);

app.get('/teas', requestHandlers.getTeas);
app.options('/teas', requestHandlers.optionsHandler);

module.exports = app;
