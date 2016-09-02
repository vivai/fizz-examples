// @flow

import * as dom from 'jsz-dom';
import {EMPTY_STRING} from 'jsz-string';
import {reverse} from '../actions/reverse';
import store from '../stores/reverse';

let view = {
  text: dom.getElementById('text'),
  button: dom.getElementById('reverse'),
  content: dom.getElementById('content'),
  state: store.state(),

  init() {
    view.button.onClick(view.onClick);
    view.render();
  },

  onClick() {
    reverse(view.text.value || EMPTY_STRING);
  },

  onChange(state) {
    view.state = state;
    view.render();
  },

  render() {
    console.info('render');
    console.log(`content = ${view.state.content}`);
    console.log(`progress = ${view.state.progress}`);

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

store.onChange(view.onChange);
