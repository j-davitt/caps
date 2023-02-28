'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');


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
  setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderID}`);
   
  }, 1000);
});