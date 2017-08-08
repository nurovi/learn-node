var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

// map the routes
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);