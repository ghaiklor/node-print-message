const kleur = require('kleur');

// eslint-disable-next-line no-control-regex
const ANSI_REGEX = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/g;
const ASTRAL_REGEX = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

/**
 * BaseMessage class which is showing message without borders or animations.
 * If you want to create your own message you must extends from this class.
 *
 * @since 2.0.0
 * @version 2.0.0
 */
class BaseMessage {
  /**
   * Creates new message instance.
   *
   * @constructor
   * @param {Array} [lines] Array of strings that you want to print out
   * @param {Object} [config] Configuration object
   * @param {String} [config.color] Foreground color
   * @param {Number} [config.marginTop] Count of lines before print message
   * @param {Number} [config.marginBottom] Count of lines after print message
   * @param {Function} [config.printFn] Function that used to print transformed message
   */
  constructor(lines, config) {
    this._lines = [];
    this._config = {
      color: 'default',
      marginTop: 0,
      marginBottom: 0,
      printFn: process.stdout.write.bind(process.stdout)
    };

    this.setLines(lines);
    this.setConfig(config);
  }

  /**
   * Get lines that must be printed out to console.
   *
   * @returns {Array}
   */
  getLines() {
    return this._lines;
  }

  /**
   * Set lines that you want to print out.
   *
   * @param {Array} [lines]
   * @returns {BaseMessage}
   */
  setLines(lines = []) {
    this._lines = lines.map(line => ` ${line} `);
    return this;
  }

  /**
   * Get configuration value or the whole object.
   *
   * @param {String} [key]
   * @returns {*}
   */
  getConfig(key) {
    return typeof key === 'string' ? this._config[key] : this._config;
  }

  /**
   * Set new configuration value or new configuration object.
   *
   * @param {Object} config
   * @returns {BaseMessage}
   */
  setConfig(config = {}) {
    this._config = Object.assign(this._config, config);
    return this;
  }

  /**
   * Converts lines to string representation.
   *
   * @returns {String}
   */
  toString() {
    const lines = this.getLines();
    const config = this.getConfig();

    if (config.color !== 'default' && !kleur[config.color]) {
      throw new Error(`Color ${config.color} is not supported`);
    }

    return [
      '\n'.repeat(config.marginTop),
      lines.reduce((message, line) => message + (config.color !== 'default' ? kleur[config.color](line) : line) + '\n', ''),
      '\n'.repeat(config.marginBottom)
    ].join('');
  }

  /**
   * Prints out lines.
   *
   * @returns {BaseMessage}
   */
  print() {
    this.getConfig('printFn')(this.toString());
    return this;
  }

  /**
   * Calculates and returns correct text length.
   *
   * @returns {Number}
   */
  static getTextLength(string) {
    return string.replace(ANSI_REGEX, '').replace(ASTRAL_REGEX, ' ').length;
  }
}

module.exports = BaseMessage;
