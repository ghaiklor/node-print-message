var messages = require('./messages'),
    pmUtil = require('./util');

/**
 * Print messages to console
 * @param {Array|String} _lines Array of lines
 * @param {Object} _options Additional params for print
 */
function print(_lines, _options) {
    var options = pmUtil.assign({border: true}, _options);

    if (!!options.border) {
        new messages.BorderedMessage(_lines, _options).print();
    } else {
        new messages.BaseMessage(_lines, _options).print();
    }
}

module.exports = print;
