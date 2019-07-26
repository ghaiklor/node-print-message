const kleur = require('kleur');
const BaseMessage = require('./BaseMessage');

/**
 * Class responsible for printing out bordered messages
 *
 * @since 2.0.0
 * @version 2.0.0
 */
class BorderedMessage extends BaseMessage {
  constructor(lines, config) {
    super(lines, config);

    this.setConfig({
      borderColor: 'yellow',
      borderSymbol: '─',
      sideSymbol: '│',
      leftTopSymbol: '┌',
      leftBottomSymbol: '└',
      rightTopSymbol: '┐',
      rightBottomSymbol: '┘',
      paddingTop: 0,
      paddingBottom: 0
    }).setConfig(config);
  }

  /**
   * Makes bordered message.
   *
   * @returns {String}
   */
  toString() {
    const lines = this.getLines();
    const config = this.getConfig();
    const maxWidth = Math.max(...lines.map(line => BaseMessage.getTextLength(line)));

    if (config.color !== 'default' && !kleur[config.color]) {
      throw new Error(`Color ${config.color} is not supported`);
    }

    if (config.borderColor !== 'default' && !kleur[config.borderColor]) {
      throw new Error(`Color ${config.borderColor} is not supported`);
    }

    const topBorder = kleur[config.borderColor](config.leftTopSymbol + config.borderSymbol.repeat(maxWidth) + config.rightTopSymbol);
    const sideSeparator = kleur[config.borderColor](config.sideSymbol);
    const bottomBorder = kleur[config.borderColor](config.leftBottomSymbol + config.borderSymbol.repeat(maxWidth) + config.rightBottomSymbol);

    return [
      '\n'.repeat(config.marginTop),
      topBorder + '\n',
      (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingTop),
      lines.reduce((message, line) => message + sideSeparator + (config.color !== 'default' ? kleur[config.color](line) : line) + ' '.repeat(maxWidth - BaseMessage.getTextLength(line)) + sideSeparator + '\n', ''),
      (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingBottom),
      bottomBorder + '\n',
      '\n'.repeat(config.marginBottom)
    ].join('');
  }
}

module.exports = BorderedMessage;
