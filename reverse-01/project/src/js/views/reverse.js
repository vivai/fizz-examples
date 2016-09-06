// @flow

import {reverse} from '../actions/reverse';
import store from '../stores/reverse';

let view = {
  text: document.getElementById('text'),
  button: document.getElementById('reverse'),
  content: document.getElementById('content'),
  state: store.state(),

  init() {
    view.button.addEventListener('click', view.onClick);
    view.render();
  },

  onClick() {
    if (view.text instanceof HTMLInputElement) {
      reverse(view.text.value);
    }
  },

  update(state) {
    view.state = state;
    view.render();
  },

  render() {
    console.log('view: render');


    view.content.innerHTML = view.state.content;
    if (view.state.progress) {
      if (view.text instanceof HTMLInputElement) {
        view.text.disabled = true;
      }
      if (view.button instanceof HTMLButtonElement) {
        view.button.disabled = true;
      }
    } else {
      if (view.text instanceof HTMLInputElement) {
        view.text.disabled = false;
      }
      if (view.button instanceof HTMLButtonElement) {
        view.button.disabled = false;
      }
    }
  }

}

view.init();
store.onChange(view.update);
