var assert = require('assert'),
    BorderedMessage = require('../../lib/messages/BorderedMessage');

describe('messages:BorderedMessage', function () {
    it('Should contains properly default config for BorderedMessage', function () {
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
        assert(new BorderedMessage('test').toString().match(/test/g));
        assert(new BorderedMessage(['test', 'test2']).toString().match(/test/g));
        assert.throws(new BorderedMessage('test', {borderColor: 'wrong'}), Error);
        assert.throws(new BorderedMessage('test', {textColor: 'wrong'}), Error);
    });
});
