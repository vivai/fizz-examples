// @flow

import * as dom from 'jsz-dom';
import store from '../stores/helloStore';

let view = {
  state: null,
  element: dom.getElementById('name'),

  render() {
    console.info('helloDisplay: render');
    if (this.state != null && this.element != null) {
      this.element.innerHTML = this.state.name;
    }
  },

  update(state) {
    this.state = state;
    this.render();
  }
}

view.update(store.state());

store.onChange(view.update.bind(view));
