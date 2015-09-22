var express = require('express');
var requestHandlers = require('./request-handlers');

var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static(__dirname + '/../client'));
app.listen(8000);

var url = 'file:///Users/Mordoc/Documents/Programming/HackReactor/2015-08-mvp/client/index.html'



// app.get('/', requestHandlers.getTeas);
// app.options('/', requestHandlers.optionsHandler);
// app.get(url, requestHandlers.getTeas);
// app.options(url, requestHandlers.optionsHandler);

module.exports = app;