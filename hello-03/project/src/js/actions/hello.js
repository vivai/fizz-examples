// @flow

import {Action} from 'fizz-flux';

export let hello = Action.create('Hello', function(name: string) {
  console.info('action: hello');
  return {name};
});
