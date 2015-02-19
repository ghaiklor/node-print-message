# print-message

[![npm version](https://badge.fury.io/js/print-message.svg)](http://badge.fury.io/js/print-message)

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
    "You can set your own options for border"
], {
    border: true, // Enable border
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

## Examples

### Print simple message

```javascript
var printMessage = require('print-message');

printMessage([
    "Hello",
    "It's the huge world",
    "But width can be calculated automatically"
]);
```

### Print message with custom options

```javascript
var printMessage = require('print-message');

printMessage([
    "You can set your own options for border"
], {
    border: true, // Enable border
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
