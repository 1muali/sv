var express = require("express");
var redis = require("redis");
var io = require("socket.io");
var app = express();
var mongo = require('mongodb');
var port = process.env.PORT || 80;


////////////////////////////////// ROUTES

app.get("/", function(req, res){
    res.send("Welcome!");
});

app.get("/p", function(req, res){
    res.send("Your profile");
});

app.get("/g", function(req, res){
    res.send("Your groups");
});


////////////////////////////////// START 

app.listen(port);
console.log("[SERVER.JS]Listening on port " + port);
io.listen(app.listen(port));
console.log("[SERVER.JS]Started Socket.IO");
