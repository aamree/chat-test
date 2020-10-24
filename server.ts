import { Message, User } from "./src/types";
const express = require("express");

const app = express();
const server = require("http").Server(app);
const ioServer = require("socket.io")(server);

app.use(express.json());

const PORT = 8000;
const room = "chat";
let users = [] as Array<User>
let messages = [] as Array<Message>
const me = {} as User


ioServer.on("connection", (socket) => {
  socket.on("CHAT:JOIN", (username) => {
    socket.join(room);
    me.socketId = socket.id
    me.name = username
    const user: User = {name: username, socketId: socket.id}
    users = [...users, user]
    socket.emit('CHAT:JOIN_RESPONSE', me, users)
    socket.to(room).broadcast.emit("CHAT:SET_USERS", users);
  });

  socket.on('CHAT:NEW_MESSAGE', ({user, text }) => {       
    const message: Message = {
      message : text,
      user
    }
    messages = [message, ...messages]    
    socket.to(room).broadcast.emit('CHAT:NEW_MESSAGE', message);
  });

  socket.on("disconnect", () => {
    users = users.filter(item => item.socketId !== socket.id)
    socket.to(room).broadcast.emit("CHAT:SET_USERS", users);
  });
});

server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Сервер запущен!");
});
