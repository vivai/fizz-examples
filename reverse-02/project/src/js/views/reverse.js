// @flow

import {reverse} from '../actions/reverse';
import store from '../stores/reverse';
import * as dom from 'jsz-dom';

let view = {
  text: dom.getInputById('text'),
  button: dom.getById('reverse'),
  content: dom.getById('content'),
  state: store.state(),

  init() {
    view.button.onClick(view.onClick);
    view.render();
  },

  onClick() {
    reverse(view.text.value);
  },

  update(state) {
    view.state = state;
    view.render();
  },

  render() {
    console.log('view: render');

    view.content.innerHTML = view.state.content;

    if (view.state.progress) {
      view.text.disable();
      view.button.disable();
    } else {
      view.text.enable();
      view.button.enable();
    }
  }

}

view.init();
store.onChange(view.update);
