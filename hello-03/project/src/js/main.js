// @flow

import 'babel-polyfill';
import HelloComponent from './views/hello';
import {hello} from './actions/hello';
import ReactDOM from 'react-dom';
import React from 'react';

console.info('Fizz Example: Hello');
console.info('This example uses React and no css.');
console.info('JavaScript code statically type checked using Flow.');

ReactDOM.render(<HelloComponent/>, document.getElementById('mountPoint'));

window.app = {hello};
