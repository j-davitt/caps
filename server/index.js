'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// socket server singleton: listening for events at localhost:3001
const server = new Server();
const caps = server.of('/caps');

function logger(event, payload) {
  console.log({
    event,
    time: new Date().toISOString(),
    payload,
  });
}

caps.on('connection', (socket) => {
  console.log('Socket connected to caps namespace', socket.id);
  // checkout socket.onAny() to see all events

  socket.on('JOIN', (room) => {
    console.log('Rooms ---->', socket.adapter.rooms);
    console.log('payload is the room ----->', room);
    socket.join(room);
  });

  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    caps.emit('pickup', payload);
  });

  // these will use the caps.to(payload.store).emit() once the driver is set up to join a room as well.
  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    caps.emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    caps.emit('delivered', payload);
  });
});


server.listen(PORT);
