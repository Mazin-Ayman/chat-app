const server = require('http').createServer();
const express = require('express');
const app = express();

const io = require('socket.io')(server, {
  cors: {
    origin: ["http://localhost:7700", "http://192.168.1.99:8081"],
  }
})




io.on('connection', socket => {
  console.log(socket.id);
  socket.on('send', (msg, name) => {
    socket.broadcast.emit('re', msg, name);
  })
});


app.get('/', (req, res) => {
  res.send('hi')
})
// app.listen(8080, 'http://192.168.1.99', () => console.log("hi"))



server.listen(3000, '192.168.1.99', () => console.log("comnected to 3000")); 

