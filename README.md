# print-message

[![npm version](https://badge.fury.io/js/print-message.svg)](http://badge.fury.io/js/print-message) [![Build Status](https://travis-ci.org/ghaiklor/node-print-message.svg?branch=master)](https://travis-ci.org/ghaiklor/node-print-message)

NodeJS module for printing out beautiful messages in console.

![examples/simple.js](https://cloud.githubusercontent.com/assets/3625244/6447416/d9d646d8-c11a-11e4-8ffe-7aca05fe9ce5.png)

## Installation

Install `print-message` module:

```bash
npm install print-message
```

## Getting Started

Require `print-message` module and call function:

```javascript
var printMessage = require('print-message');

printMessage('Hello, everyone');
```

## Options

You can set your own options for border.

```javascript
var printMessage = require('print-message');

printMessage([
    "You can set your own options for border",
    "Options below is default options"
], {
    border: true, // Enable border
    textColor: 'white', // Text color
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

### Print default message

```javascript
var printMessage = require('print-message');
printMessage();
```

![examples/defaultMessage.js](https://cloud.githubusercontent.com/assets/3625244/6447402/b1a493ae-c11a-11e4-8e33-f04cf0a2cffc.png)

### Print simple message

```javascript
var printMessage = require('print-message');

printMessage([
    "Hello",
    "It's the huge world",
    "But width can be calculated automatically"
]);
```

![examples/simple.js](https://cloud.githubusercontent.com/assets/3625244/6447416/d9d646d8-c11a-11e4-8ffe-7aca05fe9ce5.png)

### Print message with custom options

```javascript
var printMessage = require('print-message');

printMessage('You can set your own options for border', {
    border: true, // Enable border
    textColor: 'green', // Text color
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
var printMessage = require('print-message');

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

The MIT License (MIT)

Copyright (c) 2015 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
