import { assert } from 'chai';
import { BorderedMessage } from '../../../src/messages/BorderedMessage';

describe('BorderedMessage', () => {
  it('Should contains default config for BorderedMessage', () => {
    assert.deepEqual(new BorderedMessage(['test'], {printFn: console.log}).getConfig(), {
      color: 'default',
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

    assert.throws(() => new BorderedMessage(['test'], {borderColor: 'wrong'}).toString(), Error, 'Color wrong is not supported');
    assert.throws(() => new BorderedMessage(['test'], {color: 'wrong'}).toString(), Error, 'Color wrong is not supported');
  });
});
