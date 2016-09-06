// @flow

import {hello} from '../actions/hello';
import store from '../stores/hello';
import * as dom from 'jsz-dom';

let view = {
  state: store.state(),
  name: dom.getById('name'),
  input: dom.getInputById('input'),
  button: dom.getById('button'),

  init() {
    view.button.onClick(view.onClick);
    view.render();
  },

  onClick() {
    hello(view.input.value);
  },

  render() {
    console.log('view: render');

    view.name.innerHTML = view.state.name;
  },

  update(state) {
    view.state = state;
    view.render();
  }
}

view.init();
store.onChange(view.update.bind(view));
