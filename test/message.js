var assert = require('assert'),
    messages = require('../lib/message');

describe('Message', function () {
    it('Should exists all types', function () {
        assert.equal(typeof messages.BaseMessage, 'function');
        assert.equal(typeof messages.BorderedMessage, 'function');
    });

    it('Should properly get/set lines to BaseMessage', function () {
        var BaseMessage = messages.BaseMessage,
            message = new BaseMessage('test');

        assert.deepEqual(message.getLines(), [' test ']);

        message.setLines('test2');
        assert.deepEqual(message.getLines(), [' test2 ']);

        message.setLines(['test1', 'test2']);
        assert.deepEqual(message.getLines(), [' test1 ', ' test2 ']);
    });

    it('Should properly get/set config to BaseMessage', function () {
        var BaseMessage = messages.BaseMessage,
            message = new BaseMessage('test');

        assert.deepEqual(message.getConfig(), {
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            printFn: console.log
        });

        message.setConfig({
            marginTop: 1,
            marginBottom: 2,
            paddingTop: 3,
            paddingBottom: 4,
            printFn: console.error
        });

        assert.deepEqual(message.getConfig(), {
            marginTop: 1,
            marginBottom: 2,
            paddingTop: 3,
            paddingBottom: 4,
            printFn: console.error
        });
    });

    it('Should properly generate BaseMessage string', function () {
        var BaseMessage = messages.BaseMessage;

        assert.equal(new BaseMessage('test').toString(), ' test \n');
    });

    it('Should properly generate BorderedMessage string', function () {
    });
});
