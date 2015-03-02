var util = require('util'),
    chalk = require('chalk'),
    pmUtil = require('../util'),
    BaseMessage = require('./BaseMessage');

util.inherits(BorderedMessage, BaseMessage);

/**
 * BorderedMessage constructor
 * @param {Array|String} lines Array of lines or one line
 * @param {Object} config Configuration object for bordered message
 * @constructor
 */
function BorderedMessage(lines, config) {
    BaseMessage.apply(this, arguments);
}

/**
 * Override default configuration object for bordered messages
 */
BorderedMessage.prototype._defaultConfig = pmUtil.assign(pmUtil.assign({}, BorderedMessage.prototype._defaultConfig), {
    borderColor: 'yellow',
    borderSymbol: '─',
    sideSymbol: '│',
    leftTopSymbol: '┌',
    leftBottomSymbol: '└',
    rightTopSymbol: '┐',
    rightBottomSymbol: '┘',
    paddingTop: 0,
    paddingBottom: 0
});

/**
 * Override toString method for generating bordered message
 * @returns {String}
 */
BorderedMessage.prototype.toString = function () {
    var lines = this.getLines(),
        config = this.getConfig(),
        message = '';

    if (!chalk[config.borderColor]) {
        throw new Error('Color ' + config.borderColor + ' is not supported');
    }

    if (config.textColor !== 'default' && !chalk[config.textColor]) {
        throw new Error('Color ' + config.textColor + ' is not supported');
    }

    var maxWidth = Math.max.apply(Math, lines.map(function (line) {
            return pmUtil.getLength(line);
        })),
        data = lines.map(function (line) {
            return {
                text: line,
                rest: maxWidth - pmUtil.getLength(line)
            };
        }),
        topBorder = chalk[config.borderColor](config.leftTopSymbol + pmUtil.fillString(config.borderSymbol, maxWidth) + config.rightTopSymbol),
        sideSeparator = chalk[config.borderColor](config.sideSymbol),
        bottomBorder = chalk[config.borderColor](config.leftBottomSymbol + pmUtil.fillString(config.borderSymbol, maxWidth) + config.rightBottomSymbol);

    message += pmUtil.fillString('\n', config.marginTop);
    message += topBorder + '\n';
    message += pmUtil.fillString(sideSeparator + pmUtil.fillString(' ', maxWidth) + sideSeparator + '\n', config.paddingTop);

    for (var i = 0; i < data.length; i++) {
        message += sideSeparator + (config.textColor !== 'default' ? chalk[config.textColor](data[i].text) : data[i].text) + pmUtil.fillString(' ', data[i].rest) + sideSeparator + '\n'
    }

    message += pmUtil.fillString(sideSeparator + pmUtil.fillString(' ', maxWidth) + sideSeparator + '\n', config.paddingBottom);
    message += bottomBorder + '\n';
    message += pmUtil.fillString('\n', config.marginBottom);

    return message;
};

module.exports = BorderedMessage;
