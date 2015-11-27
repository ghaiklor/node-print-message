var printMessage = require('../lib/print');

printMessage(['You can set your own options'], {
  border: true,
  color: 'green',
  borderColor: 'blue',
  borderSymbol: '│',
  sideSymbol: '│',
  leftTopSymbol: '└',
  leftBottomSymbol: '┌',
  rightTopSymbol: '┘',
  rightBottomSymbol: '┐',
  marginTop: 3,
  marginBottom: 3,
  paddingTop: 2,
  paddingBottom: 2,
  printFn: function (message) {
    process.stdout.write(message);
  }
});
