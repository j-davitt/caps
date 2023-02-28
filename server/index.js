'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton: listening for events at localhost:3001
const server = new Server();
const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace', socket.id);
  // checkout socket.onAny() to see all events

  socket.on('JOIN', (room) => {
    console.log('Rooms ---->', socket.adapter.rooms);
    console.log('payload is the room ----->', room);
    socket.join(room);
  });
});
        
server.on('connection', (socket) => {
  console.log('Socket connected to event server', socket.id);

  socket.on('pickup', (payload) => {
    console.log('SERVER: Message event received', payload);

    //3 ways to emit
    // server.emit('MESSAGE', payload); // sends to all parties including sender
    socket.broadcast.emit('pickup', payload); // sends to all clients in the namespace except the sender
  });
});

server.listen(PORT);
