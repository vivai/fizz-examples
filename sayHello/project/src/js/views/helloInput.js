// @flow

import * as dom from 'jsz-dom';
import {EMPTY_STRING} from 'jsz-string';
import {sayHello} from '../actions/sayHello';

let view = {
  input: dom.getElementById('input'),
  button: dom.getElementById('button'),

  init() {
    this.button.onClick(this.onClick.bind(this));
  },

  onClick() {
    sayHello(this.input.value || EMPTY_STRING);
  }

}

view.init();
