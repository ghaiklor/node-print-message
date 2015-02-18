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
 * Print messages to console
 * @param {Array} lines Array of lines
 * @param {Object} options Additional params for print
 */
function print(lines, options) {
    lines = lines.map(function (line) {
        return ' ' + line + ' ';
    });

    var contentWidth = Math.max.apply(Math, lines.map(function (line) {
        return _getStringLength(line);
    }));

    var lineRest = lines.map(function (line) {
        return contentWidth - _getStringLength(line);
    });

    var top = chalk.yellow('┌' + _fillString('─', contentWidth) + '┐');
    var bottom = chalk.yellow('└' + _fillString('─', contentWidth) + '┘');
    var side = chalk.yellow('│');

    var message = top + '\n';

    for (var i = 0; i < lines.length; i++) {
        message += side + lines[i] + _fillString(' ', lineRest[i]) + side + '\n'
    }

    message += bottom;

    console.log(message);
}

module.exports = print;
