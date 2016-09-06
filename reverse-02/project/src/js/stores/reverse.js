// @flow

import {Store} from 'fizz-flux';
import {reverseStart, reverseRun, reverseStop} from '../actions/reverse';
import {EMPTY_STRING} from 'jsz-string';

export default Store.create(
  {
    content: EMPTY_STRING,
    progress: false
  }
).register(reverseRun, function(payload) {
  console.log('store: dispatch reverseRun');
  this.content = payload.data;
}).register(reverseStart, function() {
  console.log('store: dispatch reverseStart');
  this.progress = true;
}).register(reverseStop, function() {
  console.log('store: dispatch reverseStop');
  this.progress = false;
});
