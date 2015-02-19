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
 * Wrap lines in border based on options and return string
 * @param {Array} lines Array of lines
 * @param {Object} options Options for border style
 * @private
 */
function _getMessageWithBorder(lines, options) {
    if (!chalk[options.borderColor]) {
        throw new Error("Color " + options.borderColor + " is not supported");
    }

    // Need for calculating where right side separator should be located
    var maxWidth = Math.max.apply(Math, lines.map(function (line) {
        return _getLength(line);
    }));

    // Each line parsed in object with text and rest spaces to right side separator
    var data = lines.map(function (line) {
        return {
            text: line,
            rest: maxWidth - _getLength(line)
        };
    });

    // Top border
    var topBorder = chalk[options.borderColor](options.leftTopSymbol + _fillString(options.borderSymbol, maxWidth) + options.rightTopSymbol);

    // Bottom border
    var bottomBorder = chalk[options.borderColor](options.leftBottomSymbol + _fillString(options.borderSymbol, maxWidth) + options.rightBottomSymbol);

    // Side separator
    var sideSeparator = chalk[options.borderColor](options.sideSymbol);

    // Start message generating
    var message = "";
    message += _fillString('\n', options.marginTop);
    message += topBorder + '\n';
    message += _fillString(sideSeparator + _fillString(' ', maxWidth) + sideSeparator + '\n', options.paddingTop);

    for (var i = 0; i < data.length; i++) {
        message += sideSeparator + data[i].text + _fillString(' ', data[i].rest) + sideSeparator + '\n'
    }

    message += _fillString(sideSeparator + _fillString(' ', maxWidth) + sideSeparator + '\n', options.paddingBottom);
    message += bottomBorder + '\n';
    message += _fillString('\n', options.marginBottom);

    return message;
}

/**
 * Get message without border
 * @param {Array} lines Array of lines
 * @param {Object} options Object with options
 * @private
 */
function _getMessageWithoutBorder(lines, options) {
    var message = "";
    message += _fillString('\n', options.marginTop);

    for (var i = 0; i < lines.length; i++) {
        message += lines[i] + '\n'
    }

    message += _fillString('\n', options.marginBottom);

    return message;
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
