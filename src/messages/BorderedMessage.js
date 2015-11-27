import chalk from 'chalk';
import { BaseMessage } from './BaseMessage';

/**
 * Class responsible for printing out bordered messages
 *
 * @since 2.0.0
 * @version 2.0.0
 */
export class BorderedMessage extends BaseMessage {
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
    let lines = this.getLines();
    let config = this.getConfig();
    let maxWidth = Math.max(...lines.map(line => BaseMessage.getTextLength(line)));

    if (config.color !== 'default' && !chalk[config.color]) throw new Error(`Color ${config.color} is not supported`);
    if (config.borderColor !== 'default' && !chalk[config.borderColor]) throw new Error(`Color ${config.borderColor} is not supported`);

    let topBorder = chalk[config.borderColor](config.leftTopSymbol + config.borderSymbol.repeat(maxWidth) + config.rightTopSymbol);
    let sideSeparator = chalk[config.borderColor](config.sideSymbol);
    let bottomBorder = chalk[config.borderColor](config.leftBottomSymbol + config.borderSymbol.repeat(maxWidth) + config.rightBottomSymbol);

    return [
      '\n'.repeat(config.marginTop),
      topBorder + '\n',
      (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingTop),
      lines.reduce((message, line) => message + sideSeparator + (config.color !== 'default' ? chalk[config.color](line) : line) + ' '.repeat(maxWidth - BaseMessage.getTextLength(line)) + sideSeparator + '\n', ''),
      (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingBottom),
      bottomBorder + '\n',
      '\n'.repeat(config.marginBottom)
    ].join('');
  }
}
