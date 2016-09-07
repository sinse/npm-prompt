/// <reference path="bundle.d.ts" />

import * as prompt from 'prompt';

prompt.start();

let property = {
  name: 'yesno',
  message: 'are you sure?',
  validator: /y[es]*|n[o]?/,
  warning: 'Must respond yes or no',
  default: 'no'
};


// Get the simple yes or no property
prompt.get(property, function (err, result) {
  console.log('Command-line input received:');
  console.log('  result: ' + result.yesno);
});

