const BaseMessage = require('./messages/BaseMessage');
const BorderedMessage = require('./messages/BorderedMessage');

/**
 * Print messages to console.
 *
 * @param {Array} lines Array of lines
 * @param {Object} [config] Additional params for print
 */
function print(lines, config = {}) {
  if (config.border === false) {
    return new BaseMessage(lines, config).print();
  } else {
    return new BorderedMessage(lines, config).print();
  }
}

module.exports = print;
