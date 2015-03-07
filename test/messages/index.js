var assert = require('assert'),
    messages = require('../../lib/messages');

describe('messages:index', function () {
    it('Should has all messages', function () {
        assert.equal(typeof messages.BaseMessage, 'function');
        assert.equal(typeof messages.BorderedMessage, 'function');
    });
});
