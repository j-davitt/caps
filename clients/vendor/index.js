'use strict';

// const eventPool = require('../../eventPool');
const handler = require('./handler');

const { io } = require('socket.io-client');
const { packageDelivered, generateOrder } = require('./handler')

const socket = io.connect('http://localhost:3001/caps');

let store = '1-206-flowers';

socket.emit('JOIN', store);


setInterval(() => {
  generateOrder(socket);
}, 5000);


socket.on('delivered', (payload) => {
  packageDelivered(payload);
});



