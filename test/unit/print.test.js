const { assert } = require('chai');
const BaseMessage = require('../../src/messages/BaseMessage');
const BorderedMessage = require('../../src/messages/BorderedMessage');
const print = require('../..');

describe('module:index', () => {
  it('Should be a function', () => {
    assert.equal(typeof print, 'function');
  });

  it('Should properly instantiate BaseMessage', () => {
    assert.instanceOf(print(['test'], { border: false }), BaseMessage);
  });

  it('Should properly instantiate BorderedMessage', () => {
    assert.instanceOf(print(['test'], { border: true }), BorderedMessage);
    assert.instanceOf(print(['test']), BorderedMessage);
  });
});
