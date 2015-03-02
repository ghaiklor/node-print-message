var assert = require('assert'),
    messages = require('../lib/messages');

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
            message = new BaseMessage('test', {
                printFn: console.log
            });

        assert.deepEqual(message.getConfig(), {
            textColor: 'default',
            marginTop: 0,
            marginBottom: 0,
            printFn: console.log
        });

        message.setConfig({
            textColor: 'black',
            marginTop: 1,
            marginBottom: 2,
            paddingTop: 3,
            paddingBottom: 4,
            printFn: console.error
        });

        assert.deepEqual(message.getConfig(), {
            textColor: 'black',
            marginTop: 1,
            marginBottom: 2,
            paddingTop: 3,
            paddingBottom: 4,
            printFn: console.error
        });
    });

    it('Should properly generate BaseMessage string', function () {
        var BaseMessage = messages.BaseMessage;

        assert(new BaseMessage('test').toString().match(/test/g));
        assert(new BaseMessage(['test', 'test2']).toString().match(/test/g));
        assert(new BaseMessage('test', {marginTop: 2}).toString().match(/test/g));
        assert(new BaseMessage('test', {marginBottom: 2}).toString().match(/test/g));
    });

    it('Should contains properly default config for BorderedMessage', function () {
        var BorderedMessage = messages.BorderedMessage;

        assert.deepEqual(new BorderedMessage('test', {printFn: console.log}).getConfig(), {
            textColor: 'default',
            borderColor: 'yellow',
            borderSymbol: '─',
            sideSymbol: '│',
            leftTopSymbol: '┌',
            leftBottomSymbol: '└',
            rightTopSymbol: '┐',
            rightBottomSymbol: '┘',
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
            printFn: console.log
        });
    });

    it('Should properly generate BorderedMessage string', function () {
        var BorderedMessage = messages.BorderedMessage;

        assert(new BorderedMessage('test').toString().match(/test/g));
        assert(new BorderedMessage(['test', 'test2']).toString().match(/test/g));
    });
});
