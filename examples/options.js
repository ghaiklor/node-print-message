var printMessage = require('../');

printMessage([
    "You can set your own options for border",
    "borderColor",
    "borderSymbol",
    "sideSymbol",
    "leftTopSymbol",
    "leftBottomSymbol",
    "rightTopSymbol",
    "rightBottomSymbol"
], {
    borderColor: 'green',
    borderSymbol: '│',
    sideSymbol: '-',
    leftTopSymbol: '└',
    leftBottomSymbol: '┌',
    rightTopSymbol: '┘',
    rightBottomSymbol: '┐'
});
