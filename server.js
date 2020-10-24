"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var express = require("express");
var app = express();
var server = require("http").Server(app);
var ioServer = require("socket.io")(server);
app.use(express.json());
var PORT = 8000;
var room = "chat";
var users = [];
var messages = [];
var me = {};
ioServer.on("connection", function (socket) {
    socket.on("CHAT:JOIN", function (username) {
        socket.join(room);
        me.socketId = socket.id;
        me.name = username;
        var user = { name: username, socketId: socket.id };
        users = __spreadArrays(users, [user]);
        socket.emit('CHAT:JOIN_RESPONSE', me, users);
        socket.to(room).broadcast.emit("CHAT:SET_USERS", users);
    });
    socket.on('CHAT:NEW_MESSAGE', function (_a) {
        var socketId = _a.socketId, text = _a.text;
        console.log("socketId", socketId);
        console.log("users", users);
        var message = {
            message: text,
            user: socketId
        };
        messages = __spreadArrays([message], messages);
        console.log("message", message);
        socket.to(room).broadcast.emit('CHAT:NEW_MESSAGE', message);
    });
    socket.on("disconnect", function () {
        users = users.filter(function (item) { return item.socketId !== socket.id; });
        socket.to(room).broadcast.emit("CHAT:SET_USERS", users);
    });
    console.log("socket connected", socket.id);
});
server.listen(PORT, function (err) {
    if (err) {
        throw Error(err);
    }
    console.log("Сервер запущен!");
});
