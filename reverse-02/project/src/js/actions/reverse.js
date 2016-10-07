// @flow

import {Action} from 'fizz-flux';

export let reverseRun = Action.create(function(str: string) {
  console.log(`action: reverse('${str}')`);
  return fetch(`reverse/${encodeURI(str)}`);
});

export let reverseStart = Action.create();

export let reverseStop = Action.create();

export function reverse(str: string) {
  reverseStart()
    .then(() => reverseRun(str))
    .then(reverseStop);
}
