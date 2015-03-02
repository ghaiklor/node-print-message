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
