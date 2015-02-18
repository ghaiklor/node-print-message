# print-message

NodeJS module for printing out beautiful messages in console.

## Installation

Install `print-message` module:

```bash
npm install print-message
```

## Getting Started

Require `print-message` module and call function:

```javascript
var printMessage = require('print-message');

printMessage([
    "Hello",
    "It's the huge world",
    "But width can be calculated automatically"
]);
```

## Options

You can set your own options for border.

```javascript
var printMessage = require('print-message');

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
```
