var assert = require('assert'),
    print = require('../');

describe('module:index', function () {
    it('Should be a function', function () {
        assert.equal(typeof print, 'function');
    });
});
