'use strict';

let eventPool = require('./eventPool');
require('./clients/vendor');
require('./clients/driver');


eventPool.on('pickup', (payload) => logger('pickup', payload));
eventPool.on('in-transit', (payload) => logger('in-transit', payload));
eventPool.on('delivered', (payload) => logger('delivered', payload));

function logger(event, payload) {
  console.log({
    event,
    time: new Date().toISOString(),
    payload,
  });
}



const start = () => {
  setInterval(() => {
    let store = '1-206-flowers';
    eventPool.emit('VENDOR', store);
  }, 5000);
};

start();


// eventPool.on('pickup', (payload) => {
//   console.log({
//     event: 'pickup',
//     time: new Date().toISOString(),
//     payload,
//   });
// });

// eventPool.on('in-transit', (payload) => {
//   setTimeout(() => {
//     console.log({
//       event: 'in-transit',
//       time: new Date().toISOString(),
//       payload,
//     });
//     eventPool.emit('delivered', payload);

//   }, 1000);
// });

// eventPool.on('delivered', (payload) => {
//   setTimeout(() => {
//     console.log(`DRIVER: delivered ${payload.orderID}`);
//     console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
//     console.log({
//       event: 'delivered',
//       time: new Date().toISOString(),
//       payload,
//     });

//   }, 1000);
// });
