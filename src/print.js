import { BaseMessage } from './messages/BaseMessage';
import { BorderedMessage } from './messages/BorderedMessage';

/**
 * Print messages to console.
 *
 * @param {Array} _lines Array of lines
 * @param {Object} _config Additional params for print
 */
export default function (_lines, _config) {
  let config = Object.assign({border: true}, _config);

  if (!!config.border) {
    return new BorderedMessage(_lines, _config).print();
  } else {
    return new BaseMessage(_lines, _config).print();
  }
}
