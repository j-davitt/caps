'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');


eventPool.on('pickup', (payload) => {
  setTimeout(() => {
    handler(payload);
  }, 1000);
});

