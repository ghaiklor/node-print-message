var assert = require('assert');
var ansiRegex = require('.././util/ansiRegex');

describe('util:ansiRegex', function () {
  it('Should be regex object', function () {
    assert.equal(typeof ansiRegex, 'object');
  });
});
