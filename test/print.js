var assert = require('assert');
var BaseMessage = require('../lib/messages/BaseMessage');
var BorderedMessage = require('../lib/messages/BorderedMessage');
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
