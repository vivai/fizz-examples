// @flow

import {hello} from '../actions/hello';
import store from '../stores/hello';
import React from 'react';

export default class HelloComponent extends React.Component {
  props: {name: string};
  state: {name: string};

  static defaultProps: {name: string};

  input: HTMLInputElement;

  constructor(props: {name:string}) {
    super(props);
    this.state = {name: props.name}
  }

  componentWillMount() {
    store.onChange((state) => this.setState(state));
  }

  onClick() {
    hello(this.input.value);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <input ref={(node) => this.input = node} type='text' size='32'/>
        <button onClick={() => this.onClick()}>say Hello</button>
      </div>
    );
  }

}

HelloComponent.defaultProps = {
  name: 'world'
}
