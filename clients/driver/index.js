'use strict';

const eventPool = require('../../eventPool');
const handler = require('./handler');
const { io } = require('socket.io-client');

const socket = io('http://localhost:3001/caps');


eventPool.on('pickup', (payload) => {
  setTimeout(() => {
    handler(payload);
  }, 1000);
});

eventPool.on('in-transit', (payload) => {
  setTimeout(() => {
    eventPool.emit('delivered', payload);

  }, 1000);
});

eventPool.on('delivered', (payload) => {
  console.log(`DRIVER: delivered ${payload.orderID}`);
});