var assert = require('assert'),
    util = require('../lib/util');

describe('Util', function () {
    it('Should exists ANSI regex', function () {
        assert.notEqual(typeof util.ansiRegex, undefined);
    });

    it('Should properly assign objects', function () {
        var obj1 = {foo: 'bar'},
            obj2 = {bar: 'foo'};

        assert.deepEqual(util.assign(obj1, obj2), {
            foo: 'bar',
            bar: 'foo'
        });

        assert.notDeepEqual(util.assign(obj1, obj2), {});
    });

    it('Should exists astral regex', function () {
        assert.notEqual(typeof util.astralRegex, undefined);
    });

    it('Should properly fill string with symbols', function () {
        assert.equal(util.fillString('-', 3), '---');
        assert.equal(util.fillString('-a-', 3), '-a--a--a-');
    });

    it('Should properly get length of string', function () {
        assert.equal(util.getLength('abc'), 3);
        assert.equal(util.getLength('фыва'), 4);
    });
});
