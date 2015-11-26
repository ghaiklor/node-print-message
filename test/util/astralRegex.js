var assert = require('assert');
var astralRegex = require('.././util/astralRegex');

describe('util:astralRegex', function () {
  it('Should be regex object', function () {
    assert.equal(typeof astralRegex, 'object');
  });
});
