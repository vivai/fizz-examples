// @flow

import 'babel-polyfill';
import ReverseComponent from './views/reverse';
import {reverse} from './actions/reverse';
import ReactDOM from 'react-dom';
import React from 'react';

console.info('Fizz Example: Reverse #04');
console.info('This example uses React and no css.');
console.info('JavaScript code statically type checked using Flow.');

ReactDOM.render(<ReverseComponent/>, document.getElementById('mountPoint'));

window.app = {reverse};
