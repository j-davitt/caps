'use strict';


const eventPool = require('../eventPool');
const handler= require('./handler');


console.log = jest.fn();
eventPool.emit = jest.fn();


describe('handle vendor', () => {
  it('takes a store and creates the order payload', () => {
    const payload = {
      store: 'Test Store',
      orderID: 'test',
      customer: 'testCustomer',
      address: 'testAddress',
    };

    handler(payload);
    expect(payload.store).toBe('Test Store');
    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderID}`);
  });
});
