// @flow

import 'babel-polyfill';
import './views/reverse';
import {reverse} from './actions/reverse';

console.info('Fizz Example: Reverse');
console.info('This example uses jsz and no css.');
console.info('JavaScript code statically type checked using Flow.');

window.app = {reverse};
