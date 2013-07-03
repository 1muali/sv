////////////////////////////////// SETTINGS

var express = require("express");
var redis = require("redis");
var io = require("socket.io");
var app = express();
var mongo = require('mongodb');
var port = process.env.PORT || 80;


////////////////////////////////// ROUTES

require("./routes/index")(app);

////////////////////////////////// START 

app.listen(port);
console.log("[SERVER.JS]Listening on port " + port);
io.listen(app.listen(port));
console.log("[SERVER.JS]Started Socket.IO");
