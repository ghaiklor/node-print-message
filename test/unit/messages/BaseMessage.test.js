import { assert } from 'chai';
import sinon from 'sinon';
import { BaseMessage } from '../../../src/messages/BaseMessage';

describe('BaseMessage', () => {
  it('Should properly get/set lines to BaseMessage', () => {
    let message = new BaseMessage().setLines(['test1', 'test2']);
    assert.deepEqual(message.getLines(), [' test1 ', ' test2 ']);
  });

  it('Should properly get/set config to BaseMessage', () => {
    let message = new BaseMessage(['test'], {
      printFn: console.log
    });

    assert.deepEqual(message.getConfig(), {
      color: 'default',
      marginTop: 0,
      marginBottom: 0,
      printFn: console.log
    });

    message.setConfig({
      color: 'black',
      marginTop: 1,
      marginBottom: 2,
      paddingTop: 3,
      paddingBottom: 4,
      printFn: console.error
    });

    assert.deepEqual(message.getConfig(), {
      color: 'black',
      marginTop: 1,
      marginBottom: 2,
      paddingTop: 3,
      paddingBottom: 4,
      printFn: console.error
    });

    assert.equal(message.getConfig('color'), 'black');
  });

  it('Should properly generate BaseMessage string', () => {
    assert.ok(new BaseMessage(['test']).toString().match(/test/g));
    assert.ok(new BaseMessage(['test', 'test2']).toString().match(/test2/g));
    assert.ok(new BaseMessage(['test'], {color: 'black'}).toString().match(/test/g));
    assert.throws(() => new BaseMessage(['test'], {color: 'wrong'}).toString(), Error, 'Color wrong is not supported');
  });

  it('Should properly print message', () => {
    let message = new BaseMessage(['test'], {printFn: sinon.spy()});

    assert.instanceOf(message.print(), BaseMessage);
    assert.equal(message.getConfig('printFn').callCount, 1);
    assert.ok(message.getConfig('printFn').getCall(0).args[0].match(/test/g));
  });

  it('Should properly get correct text length', () => {
    assert.equal(BaseMessage.getTextLength('12345'), 5);
  });
});
