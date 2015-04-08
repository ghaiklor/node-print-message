var assert = require('assert');
var fillString = require('../../lib/util/fillString');

describe('util:fillString', function () {
  it('Should properly fill string with symbols', function () {
    assert.equal(fillString('-', 3), '---');
    assert.equal(fillString('-a-', 3), '-a--a--a-');
  });
});
