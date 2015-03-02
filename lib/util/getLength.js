var ANSI_REGEX = require('./ansiRegex'),
    ASTRAL_REGEX = require('./astralRegex');

/**
 * Get correct string length
 * @param {String} _string
 * @returns {Number}
 */
function getLength(_string) {
    var data = typeof _string === 'string' ? _string.replace(ANSI_REGEX, '').replace(ASTRAL_REGEX, ' ') : _string;
    return data.length;
}

module.exports = getLength;
