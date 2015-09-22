var express = require('express');
var http = require('http')

var statusCode = 200;
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
var headers = defaultCorsHeaders;
headers['Content-Type'] = "application/json";

var getTeas = function (req, res) {

};


var exampleTeas = [{
  name: 'green',
  temperature: 180,
  time: 120
},
{
  name: 'black',
  temperature: 212,
  time: 300
},
{
  name: 'oolong',
  temperature: 212,
  time: 250
},
{
  name: 'sencha',
  temperature: 180,
  time: 160
}
]