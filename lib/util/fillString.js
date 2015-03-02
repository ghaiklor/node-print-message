/**
 * Generate new string with filled symbols
 * @param {String} _symbol Symbol which fills the string
 * @param {Number} _count Count of symbols in generated string
 * @returns {String}
 * @private
 */
function fillString(_symbol, _count) {
    var count = _count < 0 ? 0 : _count;
    return new Array(count + 1).join(_symbol);
}

module.exports = fillString;
