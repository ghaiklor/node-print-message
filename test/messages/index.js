var assert = require('assert');
var messages = require('.././messages');

describe('messages:index', function () {
  it('Should has all messages', function () {
    assert.equal(typeof messages.BaseMessage, 'function');
    assert.equal(typeof messages.BorderedMessage, 'function');
  });
});
