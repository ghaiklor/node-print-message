import { assert } from 'chai';
import { BorderedMessage } from '../../../src/messages/BorderedMessage';

describe('messages:BorderedMessage', () => {
  it('Should contains properly default config for BorderedMessage', () => {
    assert.deepEqual(new BorderedMessage(['test'], {printFn: console.log}).getConfig(), {
      textColor: 'default',
      borderColor: 'yellow',
      borderSymbol: '─',
      sideSymbol: '│',
      leftTopSymbol: '┌',
      leftBottomSymbol: '└',
      rightTopSymbol: '┐',
      rightBottomSymbol: '┘',
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
      printFn: console.log
    });
  });

  it('Should properly generate BorderedMessage string', () => {
    assert.ok(new BorderedMessage(['test']).toString().match(/test/g));
    assert.ok(new BorderedMessage(['test', 'test2']).toString().match(/test2/g));

    assert.throws(() => new BorderedMessage('test', {borderColor: 'wrong'}).toString(), Error);
    assert.throws(() => new BorderedMessage('test', {textColor: 'wrong'}).toString(), Error);
  });
});
