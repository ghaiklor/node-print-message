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
 * @param {String} string
 * @returns {Number}
 * @private
 */
function _getStringLength(string) {
    var data = typeof string === 'string' ? string.replace(ANSI_REGEX, '').replace(ASTRAL_REGEX, ' ') : string;
    return data.length;
}

/**
 * Generate new string with filled symbols
 * @param {String} symbol Symbol which fills the string
 * @param {Number} count Count of symbols in generated string
 * @returns {String}
 * @private
 */
function _fillString(symbol, count) {
    return new Array(count + 1).join(symbol);
}

/**
 * Extend target object with source object
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 * @private
 */
function _extend(target, source) {
    target = target || {};
    source = source || {};

    var keys = Object.keys(source);

    for (var i = 0; i < keys.length; i++) {
        target[keys[i]] = source[keys[i]];
    }

    return target;
}

/**
 * Print messages to console
 * @param {Array} lines Array of lines
 * @param {Object} options Additional params for print
 */
function print(lines, options) {
    // Prepend each line with spaces before\after end of line
    lines = lines.map(function (line) {
        return ' ' + line + ' ';
    });

    // Extend options with default options
    options = _extend(options, {
        borderColor: 'yellow',
        borderSymbol: '─',
        sideSymbol: '│',
        leftTopCorner: '┌',
        leftBottomCorner: '└',
        rightTopCorner: '┐',
        rightBottomCorner: '┘'
    });

    // Check if this color is supported by chalk
    if (!chalk[options.borderColor]) {
        throw new Error("Color " + options.borderColor + " is not supported");
    }

    // Max width of all lines
    // Need for calculating where right side separator should be located
    var maxWidth = Math.max.apply(Math, lines.map(function (line) {
        return _getStringLength(line);
    }));

    var data = lines.map(function (line) {
        return {
            text: line,
            length: _getStringLength(line),
            rest: maxWidth - _getStringLength(line)
        };
    });

    var topLine = chalk[options.borderColor](options.leftTopCorner + _fillString(options.borderSymbol, maxWidth) + options.rightTopCorner);
    var bottomLine = chalk[options.borderColor](options.leftBottomCorner + _fillString(options.borderSymbol, maxWidth) + options.rightBottomCorner);
    var sideSeparator = chalk[options.borderColor](options.sideSymbol);

    var message = topLine + '\n';

    for (var i = 0; i < data.length; i++) {
        message += sideSeparator + data[i].text + _fillString(' ', data[i].rest) + sideSeparator + '\n'
    }

    message += bottomLine;

    console.log(message);
}

module.exports = print;
