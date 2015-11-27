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
    let message = '';

    if (config.color !== 'default' && !chalk[config.color]) throw new Error(`Color ${config.color} is not supported`);
    if (config.borderColor !== 'default' && !chalk[config.borderColor]) throw new Error(`Color ${config.borderColor} is not supported`);

    let maxWidth = Math.max.apply(Math, lines.map(line => BaseMessage.getTextLength(line)));

    let data = lines.map(line => {
      return {
        text: line,
        rest: maxWidth - BaseMessage.getTextLength(line)
      };
    });

    let topBorder = chalk[config.borderColor](config.leftTopSymbol + config.borderSymbol.repeat(maxWidth) + config.rightTopSymbol);
    let sideSeparator = chalk[config.borderColor](config.sideSymbol);
    let bottomBorder = chalk[config.borderColor](config.leftBottomSymbol + config.borderSymbol.repeat(maxWidth) + config.rightBottomSymbol);

    message += '\n'.repeat(config.marginTop);
    message += topBorder + '\n';
    message += (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingTop);

    for (let i = 0; i < data.length; i++) {
      message += sideSeparator + (config.color !== 'default' ? chalk[config.color](data[i].text) : data[i].text) + ' '.repeat(data[i].rest) + sideSeparator + '\n';
    }

    message += (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingBottom);
    message += bottomBorder + '\n';
    message += '\n'.repeat(config.marginBottom);

    return message;
  }
}
