var assert = require('assert');
var BaseMessage = require('./messages/BaseMessage.test');
var BorderedMessage = require('./messages/BorderedMessage.test');
var print = require('../');

describe('module:index', function () {
  it('Should be a function', function () {
    assert.equal(typeof print, 'function');
  });

  it('Should properly instantiate BaseMessage', function () {
    assert(print(['test'], {
      border: false
    }) instanceof BaseMessage);
  });

  it('Should properly instantiate BorderedMessage', function () {
    assert(print(['test'], {
      border: true
    }) instanceof BorderedMessage);
  });
});
