var express = require('express');
var http = require('http')

var statusCode = 200;
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
var headers = {};
headers['Content-Type'] = "application/json";

var getTeas = function (req, res) {
  console.log("called getTeas");
  var teas = JSON.stringify(exampleTeas);
  res.writeHead(statusCode, headers);
  res.end(teas);
};

var optionsHandler = function(request, response){
  response.writeHead(statusCode, headers);
  response.end();
}


var exampleTeas = [
  {
    name: 'Example',
    temperature: 190,
    time: 120
  },
  {
    name: 'Genmaicha',
    temperature: 180,
    time: 120
  },
  {
    name: 'English Breakfast',
    temperature: 200,
    time: 225
  },
  {
    name: 'Oolong',
    temperature: 200,
    time: 240
  },
  {
    name: 'Sencha',
    temperature: 180,
    time: 120
  },
  { 
    name: 'Peppermint',
    temperature: 200,
    time: 420
  },
  {
    name: 'Earl Grey',
    temperature: 200,
    time 240
  }
];

exports.getTeas = getTeas;
exports.optionsHandler = optionsHandler;