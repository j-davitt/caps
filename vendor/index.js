'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');

// var Chance = require('chance');
// var chance = new Chance();


// const newPackage = (store) => {
//   setInterval(() => {

//     const payload = {
//       store: store,
//       orderID: chance.guid(),
//       customer: chance.name(),
//       address: chance.address(),
//     };
//     eventPool.emit('pickup', payload);
//   }, 5000);
// }  


// module.exports = newPackage;

eventPool.on('VENDOR', (store) => {
  setTimeout(() => {
    handler(store);
  }, 1000);
});

eventPool.on('delivered', (payload) => {
  setTimeout(() => {
    console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
   
  }, 1100);
});