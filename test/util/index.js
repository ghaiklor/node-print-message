var assert = require('assert');
var util = require('.././util');

describe('util:index', function () {
  it('Should have all util', function () {
    assert.equal(typeof util.ansiRegex, 'object');
    assert.equal(typeof util.assign, 'function');
    assert.equal(typeof util.astralRegex, 'object');
    assert.equal(typeof util.fillString, 'function');
    assert.equal(typeof util.getLength, 'function');
  });
});
