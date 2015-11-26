import { BaseMessage } from './messages/BaseMessage';
import { BorderedMessage } from './messages/BorderedMessage';

/**
 * Print messages to console.
 *
 * @param {Array} lines Array of lines
 * @param {Object} [config] Additional params for print
 */
export default function (lines = [], config = {}) {
  if (config.border === false) {
    return new BaseMessage(lines, config).print();
  } else {
    return new BorderedMessage(lines, config).print();
  }
}
