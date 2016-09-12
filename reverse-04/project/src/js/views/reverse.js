// @flow

import {reverse} from '../actions/reverse';
import {EMPTY_STRING} from 'jsz-string';
import store from '../stores/reverse';
import React from 'react';

type Props = {content: string};
type State = {content: string, progress: boolean};

export default class ReverseComponent extends React.Component {
  props: Props;
  state: State;

  static defaultProps: Props;

  input: HTMLInputElement;

  constructor(props: Props) {
    super(props);
    this.state = {content: props.content, progress: false};
  }

  componentWillMount() {
    store.onChange((state) => this.setState(state));
  }

  onClick() {
    reverse(this.input.value);
  }

  render() {
    const {content, progress} = this.state;

    return (
      <div className="container">
        <p>reversed: {content}</p>
        <div className="input-group col-xs-4">
          <input ref={(node) => this.input = node}
            className = 'form-control'
            disabled={progress} type='text' size='32'/>
          <div className = 'input-group-btn'>
            <button onClick={() => this.onClick()}
              className = 'btn btn-primary'
              disabled={progress}>reverse</button>
          </div>
        </div>
      </div>
    );
  }
}

ReverseComponent.defaultProps = {
  content: EMPTY_STRING
}
