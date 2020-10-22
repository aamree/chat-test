const express = require('express')

const app = express()
const server = require('http').Server(app)
const ioServer = require('socket.io')(server)

const PORT = 8000
const data = new Map()

app.get('/test', function () {
  console.log('hello');
  
})

ioServer.on('connection', socket => {
  console.log('socket connected', socket.id);
  
})

server.listen(PORT, (err)=>{
  if (err) {
    throw Error(err)
  }
  console.log("Сервер запущен!");
  
})