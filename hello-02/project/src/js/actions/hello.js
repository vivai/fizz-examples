// @flow

import {Action} from 'fizz-flux';

export let hello = Action.create(function(name: string) {
  console.log('action: hello');
  return {name};
});
