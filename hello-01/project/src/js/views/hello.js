// @flow

import {hello} from '../actions/hello';
import store from '../stores/hello';

let view = {
  state: null,
  name: document.getElementById('name'),
  input: document.getElementById('input'),
  button: document.getElementById('button'),

  init() {
    view.button.addEventListener('click', view.onClick);
  },

  onClick() {
    hello(view.input.value || '');
  },

  render() {
    console.info('view: render');
    if (view.state != null && view.name != null) {
      view.name.innerHTML = view.state.name;
    }
  },

  update(state) {
    view.state = state;
    view.render();
  }
}

view.init();
view.update(store.state());
store.onChange(view.update.bind(view));
