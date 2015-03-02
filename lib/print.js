var message = require('./message'),
    pmUtil = require('./util');

/**
 * Print messages to console
 * @param {Array|String} _lines Array of lines
 * @param {Object} _options Additional params for print
 */
function print(_lines, _options) {
    var options = pmUtil.assign({border: true}, _options);

    if (!!options.border) {
        new message.BorderedMessage(_lines, _options).print();
    } else {
        new message.BaseMessage(_lines, _options).print();
    }
}

module.exports = print;
