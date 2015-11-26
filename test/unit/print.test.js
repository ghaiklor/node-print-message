import { assert } from 'chai';
import { BaseMessage } from '../../src/messages/BaseMessage';
import { BorderedMessage } from '../../src/messages/BorderedMessage';
import print from '../../src/print';

describe('module:index', () => {
  it('Should be a function', () => {
    assert.equal(typeof print, 'function');
  });

  it('Should properly instantiate BaseMessage', () => {
    assert(print(['test'], {border: false}) instanceof BaseMessage);
  });

  it('Should properly instantiate BorderedMessage', () => {
    assert(print(['test'], {border: true}) instanceof BorderedMessage);
  });
});
