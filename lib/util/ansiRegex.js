/**
 * Regex for ANSI symbols
 * @type {RegExp}
 * @private
 */
module.exports = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;
