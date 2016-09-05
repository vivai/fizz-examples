// @flow

import {Action} from 'fizz-flux';

export let hello = Action.create(function(name: string) {
  console.info('action: hello');
  return {name};
});
