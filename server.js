////////////////////////////////// SETTINGS

var express = require('express'),
    io = require('socket.io'),
    app = express(),
    port = process.env.PORT || 80;

require('./settings').boot(app);

////////////////////////////////// ROUTES

require('./routes/index')(app);

////////////////////////////////// START

app.listen(port);
console.log('[SERVER.JS] Listening on port '.green + port.toString().underline.green);

io.listen(app.listen(port));
console.log('[SERVER.JS] Started Socket.IO'.green);

console.log('[SERVER.JS] EVERYTHING STARTED CORRECTLY'.rainbow);

