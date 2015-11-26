var assert = require('assert');
var BaseMessage = require('.././messages/BaseMessage');

describe('messages:BaseMessage', function () {
  it('Should properly get/set lines to BaseMessage', function () {
    var message = new BaseMessage();

    assert.deepEqual(message.getLines(), [' This is default message ', ' Please, set your message! ']);

    message.setLines('test');
    assert.deepEqual(message.getLines(), [' test ']);

    message.setLines('test2');
    assert.deepEqual(message.getLines(), [' test2 ']);

    message.setLines(['test1', 'test2']);
    assert.deepEqual(message.getLines(), [' test1 ', ' test2 ']);
  });

  it('Should properly get/set config to BaseMessage', function () {
    var message = new BaseMessage('test', {
      printFn: console.log
    });

    assert.deepEqual(message.getConfig(), {
      textColor: 'default',
      marginTop: 0,
      marginBottom: 0,
      printFn: console.log
    });

    message.setConfig({
      textColor: 'black',
      marginTop: 1,
      marginBottom: 2,
      paddingTop: 3,
      paddingBottom: 4,
      printFn: console.error
    });

    assert.deepEqual(message.getConfig(), {
      textColor: 'black',
      marginTop: 1,
      marginBottom: 2,
      paddingTop: 3,
      paddingBottom: 4,
      printFn: console.error
    });

    assert.equal(message.getConfig('textColor'), 'black');
  });

  it('Should properly generate BaseMessage string', function () {
    assert(new BaseMessage('test').toString().match(/test/g));
    assert(new BaseMessage(['test', 'test2']).toString().match(/test/g));
    assert(new BaseMessage('test', {marginTop: 2}).toString().match(/test/g));
    assert(new BaseMessage('test', {marginBottom: 2}).toString().match(/test/g));
    assert.throws(function () {
      new BaseMessage('test', {textColor: 'wrong'}).toString();
    }, Error);
  });

  it('Should properly print message', function () {
    var message = new BaseMessage('test');
    assert(message.print() instanceof BaseMessage);
  });
});
