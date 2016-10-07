// @flow

import {Store} from 'fizz-flux';
import {reverseStart, reverseRun, reverseStop} from '../actions/reverse';

export default Store.create('App',
  {
    content: '',
    progress: false
  }
).register(reverseRun,
  function(state, payload) {
    console.log('store: dispatch reverseRun');
    return {...state, content: payload.data};
  }
).register(reverseStart,
  function(state) {
    console.log('store: dispatch reverseStart');
    return {...state, progress: true}
  }
).register(reverseStop,
  function(state) {
    console.log('store: dispatch reverseStop');
    return {...state, progress: false};
  }
);
