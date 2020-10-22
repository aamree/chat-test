var express = require('express');
var app = express();
var server = require('http').Server(app);
var ioServer = require('socket.io')(server);
var PORT = 8000;
var data = new Map();
app.get('/test', function () {
    console.log('hello');
});
ioServer.on('connection', function (socket) {
    console.log('socket connected', socket.id);
});
server.listen(PORT, function (err) {
    if (err) {
        throw Error(err);
    }
    console.log("Сервер запущен!");
});
