var util = require('util'),
    chalk = require('chalk'),
    BaseMessage = require('./BaseMessage');

util.inherits(BorderedMessage, BaseMessage);

/**
 * BorderedMessage constructor
 * @param {Array|String} lines Array of lines or one line
 * @param {Object} config Configuration object for bordered message
 * @constructor
 */
function BorderedMessage(lines, config) {

}

BorderedMessage.prototype = {
    toString: function () {
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
};

module.exports = BorderedMessage;
