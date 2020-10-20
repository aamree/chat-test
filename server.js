var express = require('express');
var socket = require('socket.io');
var app = express();
var server = require('http').Server(app);
var io = socket(server);
var PORT = 8000;
var data = new Map();
app.get('/users', function () {
    console.log('hello');
});
io.on('connection', function (socket) {
    console.log('socket connected', socket);
});
server.listen(PORT, function (err) {
    if (err) {
        throw Error(err);
    }
    console.log("Сервер запущен!");
});
