// @flow

import 'babel-polyfill';
import './views/hello';
import {hello} from './actions/hello';

console.info('Fizz Example: Hello');
console.info('This example uses only plain old JavaScript and no css.');
console.info('JavaScript code statically type checked using Flow.');

window.app = {hello};
