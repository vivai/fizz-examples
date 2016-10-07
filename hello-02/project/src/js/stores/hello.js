// @flow

import {Store} from 'fizz-flux';
import {hello} from '../actions/hello';

export default Store.create('Hello',
  {
    name: 'world'
  }
).register( hello, function(state, payload) {
  console.log('store: dispatch hello');
  return {...state, ...payload};
});
