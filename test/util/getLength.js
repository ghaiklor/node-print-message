var assert = require('assert');
var getLength = require('.././util/getLength');

describe('util:getLength', function () {
  it('Should properly get length of string', function () {
    assert.equal(getLength('abc'), 3);
    assert.equal(getLength('фыва'), 4);
  });
});
