var chalk = require('chalk');
var pmUtil = require('../util');

/**
 * BaseMessage constructor
 * @param {Array|String} lines Array of strings or string
 * @param {Object} config Configuration object for base message
 * @constructor
 */
function BaseMessage(lines, config) {
  this.setLines(lines);
  this.setConfig(config);
}

BaseMessage.prototype = {
  /**
   * Default configuration object for this class
   */
  _defaultConfig: {
    textColor: 'default',
    marginTop: 0,
    marginBottom: 0,
    printFn: process.stdout.write.bind(process.stdout)
  },

  /**
   * Get lines array
   * @returns {Array}
   */
  getLines: function () {
    return this._lines;
  },

  /**
   * Convert input to array and set to instance
   * @param {Array|String} _lines
   * @returns {BaseMessage}
   */
  setLines: function (_lines) {
    if (typeof _lines === 'undefined') {
      this._lines = ['This is default message', 'Please, set your message!'];
      this.setConfig({borderColor: 'red'});
    } else {
      this._lines = typeof _lines === 'string' ? [_lines] : _lines;
    }

    this._lines = this._lines.map(function (line) {
      return ['', line.toString(), ''].join(' ');
    });

    return this;
  },

  /**
   * Get configuration object or value from it
   * @param {String} [key]
   */
  getConfig: function (key) {
    if (typeof key === 'string') {
      return this._config[key];
    } else {
      return this._config;
    }
  },

  /**
   * Update configuration object
   * @param {Object} _config
   * @returns {BaseMessage}
   */
  setConfig: function (_config) {
    if (this._config) {
      this._config = pmUtil.assign(this._config, _config);
    } else {
      this._config = pmUtil.assign(pmUtil.assign({}, this._defaultConfig), _config);
    }

    return this;
  },

  /**
   * Convert to base string
   * @returns {String}
   */
  toString: function () {
    var lines = this.getLines();
    var config = this.getConfig();
    var message = '';

    if (config.textColor !== 'default' && !chalk[config.textColor]) {
      throw new Error(['Color', config.textColor, 'is not supported'].join(' '));
    }

    message += pmUtil.fillString('\n', config.marginTop);

    for (var i = 0; i < lines.length; i++) {
      message += config.textColor !== 'default' ? chalk[config.textColor](lines[i]) : lines[i] + '\n';
    }

    message += pmUtil.fillString('\n', config.marginBottom);

    return message;
  },

  /**
   * Print this message
   * @returns {BaseMessage}
   */
  print: function () {
    this.getConfig('printFn')(this.toString());
    return this;
  }
};

module.exports = BaseMessage;
