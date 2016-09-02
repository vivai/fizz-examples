// @flow

import {Action} from 'fizz-flux';

export let sayHello = Action.create(function(name: string) {
  console.info('action: sayHello');
  return {name};
});
