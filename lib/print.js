var chalk = require('chalk');

/**
 * Regex for ANSI symbols
 * @type {RegExp}
 * @private
 */
var ANSI_REGEX = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;

/**
 * Regex for symbols that have length 2 when should be 1
 * @type {RegExp}
 * @private
 */
var ASTRAL_REGEX = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

/**
 * Get correct string length
 * @param {String} _string
 * @returns {Number}
 * @private
 */
function _getLength(_string) {
    var data = typeof _string === 'string' ? _string.replace(ANSI_REGEX, '').replace(ASTRAL_REGEX, ' ') : _string;
    return data.length;
}

/**
 * Generate new string with filled symbols
 * @param {String} _symbol Symbol which fills the string
 * @param {Number} _count Count of symbols in generated string
 * @returns {String}
 * @private
 */
function _fillString(_symbol, _count) {
    var count = _count < 0 ? 0 : _count;
    return new Array(count + 1).join(_symbol);
}

/**
 * Extend target object with source object
 * @param {Object} _target
 * @param {Object} _source
 * @returns {Object}
 * @private
 */
function _extend(_target, _source) {
    var target = _target || {},
        source = _source || {},
        keys = Object.keys(source);

    for (var i = 0; i < keys.length; i++) {
        target[keys[i]] = source[keys[i]];
    }

    return target;
}

/**
 * Print messages to console
 * @param {Array} _lines Array of lines
 * @param {Object} _options Additional params for print
 */
function print(_lines, _options) {
    // Prepend each line with spaces before\after end of line
    var lines = _lines.map(function (line) {
        return ' ' + line.toString() + ' ';
    });

    // Extend options with default options
    var options = _extend({
        border: true,
        borderColor: 'yellow',
        borderSymbol: '─',
        sideSymbol: '│',
        leftTopSymbol: '┌',
        leftBottomSymbol: '└',
        rightTopSymbol: '┐',
        rightBottomSymbol: '┘',
        marginTop: 1,
        marginBottom: 1,
        paddingTop: 0,
        paddingBottom: 0,
        printFn: console.log
    }, _options);

    if (!!options.border) {
        options.printFn(_getMessageWithBorder(lines, options));
    } else {
        options.printFn(_getMessageWithoutBorder(lines, options));
    }
}

module.exports = print;
