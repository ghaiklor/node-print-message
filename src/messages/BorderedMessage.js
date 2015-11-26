import chalk from 'chalk';
import { BaseMessage } from './BaseMessage';

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
    });
    this.setConfig(config);
  }

  toString() {
    let lines = this.getLines();
    let config = this.getConfig();
    let message = '';

    if (!chalk[config.borderColor]) throw new Error(`Color ${config.borderColor} is not supported`);
    if (config.textColor !== 'default' && !chalk[config.textColor]) throw new Error(`Color ${config.color} is not supported`);

    let maxWidth = Math.max.apply(Math, lines.map(line => BaseMessage.getTextLength(line)));

    let data = lines.map(line => {
      return {
        text: line,
        rest: maxWidth - pmUtil.getLength(line)
      };
    });

    let topBorder = chalk[config.borderColor](config.leftTopSymbol + pmUtil.fillString(config.borderSymbol, maxWidth) + config.rightTopSymbol);
    let sideSeparator = chalk[config.borderColor](config.sideSymbol);
    let bottomBorder = chalk[config.borderColor](config.leftBottomSymbol + pmUtil.fillString(config.borderSymbol, maxWidth) + config.rightBottomSymbol);

    message += '\n'.repeat(config.marginTop);
    message += topBorder + '\n';
    message += (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingTop);

    for (let i = 0; i < data.length; i++) {
      message += sideSeparator + (config.textColor !== 'default' ? chalk[config.textColor](data[i].text) : data[i].text) + ' '.repeat(data[i].rest) + sideSeparator + '\n';
    }

    message += (sideSeparator + ' '.repeat(maxWidth) + sideSeparator + '\n').repeat(config.paddingBottom);
    message += bottomBorder + '\n';
    message += '\n'.repeat(config.marginBottom);

    return message;
  }
}
