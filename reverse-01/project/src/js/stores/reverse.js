// @flow

import {Store} from 'fizz-flux';
import {EMPTY_STRING} from 'jsz-string';
import {reverseStart, reverseRun, reverseStop} from '../actions/reverse';

export default Store.create(
  {
    content: EMPTY_STRING,
    progress: false
  }
).register(reverseRun, function(payload) {
  console.info('store: dispatch reverseRun');
  this.content = payload.data;
}).register(reverseStart, function() {
  console.info('store: dispatch reverseStart');
  this.progress = true;
}).register(reverseStop, function() {
  console.info('store: dispatch reverseStop');
  this.progress = false;
});
