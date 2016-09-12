// @flow

import {Store} from 'fizz-flux';
import {hello} from '../actions/hello';

export default Store.create(
  {
    name: 'world'
  }
).register( hello, function(payload) {
  console.info('store: dispatch hello');
  this.name = payload.name;
});
