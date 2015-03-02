/**
 * BaseMessage constructor
 * @param {Array|String} lines Array of strings or string
 * @constructor
 */
function BaseMessage(lines) {
    this.setLines(lines);
}

BaseMessage.prototype = {
    getLines: function () {
        return this._lines;
    },

    setLines: function (lines) {
        this._lines = lines;
        return this;
    },

    toString: function () {
        var message = "";
        message += _fillString('\n', options.marginTop);

        for (var i = 0; i < lines.length; i++) {
            message += lines[i] + '\n'
        }

        message += _fillString('\n', options.marginBottom);

        return message;
    }
};

module.exports = BaseMessage;
