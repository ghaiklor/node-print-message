/**
 * Regex for symbols that have length 2 when should be 1
 * @type {RegExp}
 * @private
 */
module.exports = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
