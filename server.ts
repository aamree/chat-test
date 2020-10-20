const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const PORT = 8000
const data = new Map()

app.get('/test', function () {
  console.log('hello');
  
})

io.on('connection', socket => {
  console.log('socket connected', socket);
  
})

server.listen(PORT, (err)=>{
  if (err) {
    throw Error(err)
  }
  console.log("Сервер запущен!");
  
})