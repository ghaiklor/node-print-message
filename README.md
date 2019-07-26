# print-message

![Travis (.org)](https://img.shields.io/travis/ghaiklor/node-print-message)
![Codecov](https://img.shields.io/codecov/c/github/ghaiklor/node-print-message)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/print-message)
![npm](https://img.shields.io/npm/dm/print-message)
![NPM](https://img.shields.io/npm/l/print-message)

[![GitHub followers](https://img.shields.io/github/followers/ghaiklor.svg?label=Follow&style=social)](https://github.com/ghaiklor)
[![Twitter Follow](https://img.shields.io/twitter/follow/ghaiklor.svg?label=Follow&style=social)](https://twitter.com/ghaiklor)

Node.js module for printing out beautiful messages in console.

![examples/simple.js](https://cloud.githubusercontent.com/assets/3625244/6447416/d9d646d8-c11a-11e4-8ffe-7aca05fe9ce5.png)

## Installation

Install `print-message` module:

```bash
npm install --save print-message
```

## Getting Started

Require `print-message` module and call a function:

```javascript
const printMessage = require('print-message');

printMessage(['Hello, everyone']);
```

## Options

You can set your own options for border.

```javascript
const printMessage = require('print-message');

printMessage([
    "You can set your own options for border",
    "Options below is default options"
], {
    border: true, // Enable border
    color: 'default', // Default text color from console
    borderColor: 'yellow', // Border color is yellow
    borderSymbol: '─', // Symbol that uses for border
    sideSymbol: '│', // Symbol that uses for side separators
    leftTopSymbol: '┌', // Symbol that uses for left top corner
    leftBottomSymbol: '└', // Symbol that uses for left bottom corner
    rightTopSymbol: '┐', // Symbol that uses for right top corner
    rightBottomSymbol: '┘', // Symbol that uses for right bottom corner
    marginTop: 0, // Margin before border is begins
    marginBottom: 0, // Margin after border is ends
    paddingTop: 0, // Padding after border begins
    paddingBottom: 0, // Padding before border ends
    printFn: process.stdout.write.bind(process.stdout) // Custom function for print generated message
});
```

## Examples

### Print simple message

```javascript
const printMessage = require('print-message');

printMessage([
    "Hello",
    "It's the huge world",
    "But width can be calculated automatically"
]);
```

![examples/simple.js](https://cloud.githubusercontent.com/assets/3625244/6447416/d9d646d8-c11a-11e4-8ffe-7aca05fe9ce5.png)

### Print message with custom options

```javascript
const printMessage = require('print-message');

printMessage(['You can set your own options for border'], {
    border: true, // Enable border
    color: 'green', // Text color
    borderColor: 'blue', // Border color is blue
    borderSymbol: '│', // Symbol that uses for border
    sideSymbol: '│', // Symbol that uses for side separators
    leftTopSymbol: '└', // Symbol for left top corner
    leftBottomSymbol: '┌', // Symbol for left bottom corner
    rightTopSymbol: '┘', // Symbol for right top corner
    rightBottomSymbol: '┐', // Symbol for right bottom corner
    marginTop: 3, // Margin before border is begins
    marginBottom: 3, // Margin after border is end
    paddingTop: 2, // Padding top after border begins
    paddingBottom: 2, // Padding bottom before border ends
    printFn: function (message) {
        // Custom function that accepts generated message as argument and print it
        process.stdout.write(message);
    }
});
```

![examples/options.js](https://cloud.githubusercontent.com/assets/3625244/6447409/c4d2acae-c11a-11e4-93b7-7465793ba4d4.png)

### Print message without border

```javascript
const printMessage = require('print-message');

printMessage([
    "This message will be without border",
    "But you still can set marginTop and marginBottom"
], {
    border: false,
    marginTop: 3,
    marginBottom: 3
});
```

![examples/withoutBorder.js](https://cloud.githubusercontent.com/assets/3625244/6447427/e818bf3c-c11a-11e4-97f5-5bb33a67349f.png)

## License

[The MIT License (MIT)](./LICENSE)
