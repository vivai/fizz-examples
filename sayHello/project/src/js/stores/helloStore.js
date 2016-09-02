// @flow

import {Store} from 'fizz-flux';
import {sayHello} from '../actions/sayHello';

export default Store.create(
  {
    name: 'world'
  }
).register( sayHello, function(payload) {
  console.info('helloStore: dispatch sayHello');
  this.name = payload.name;
});
