// @flow
import './views/helloDisplay';
import './views/helloInput';
import {sayHello} from './actions/sayHello';

console.info('Say Hello');

window.app = {sayHello};
