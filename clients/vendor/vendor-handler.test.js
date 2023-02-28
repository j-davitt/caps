'use strict';


const eventPool = require('../../eventPool');
const handler= require('./handler');


console.log = jest.fn();
eventPool.emit = jest.fn();


describe('handle vendor', () => {
  it('takes a store and creates the order payload', () => {
    const store = 'Test Store';

    let test = handler(store);
    console.log('-------------', test);
    expect('').toBe('');
  });
});
