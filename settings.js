////////////////////////////////// SETTINGS
 
var express = require('express'),
    redis = require('redis'),
    io = require('socket.io'),
    mongo = require('mongodb'),
    colors = require('colors');

exports.boot = function(app){
  bootApplication(app);
};

function bootApplication(app) {

console.log('[SETTINGS.JS] Configuring application'.green);

app.configure(function(){

// bodyParser should be above methodOverride
app.use(express.bodyParser());
app.use(express.methodOverride());

// cookieParser should be above session
app.use(express.cookieParser());
app.use(express.session({ secret: 'pu7th3l0ti()n1nth3b45k3t!' }));

app.use(express.logger(':method :url :status'));
app.use(express.favicon());

// routes should be at the last
app.use(app.router);

});
}
