const printMessage = require('..');

printMessage([
  'This message will be without border',
  'But you still can set marginTop and marginBottom'
], {
  border: false,
  marginTop: 3,
  marginBottom: 3
});
