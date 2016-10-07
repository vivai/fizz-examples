// @flow

import {Store} from 'fizz-flux';
import {hello} from '../actions/hello';

export default Store.create( 'Hello',
  {
    name: 'world'
  }
).register( hello, function(state, payload) {
  console.info('store: dispatch hello');
  return {...state, name: payload.name};
});
