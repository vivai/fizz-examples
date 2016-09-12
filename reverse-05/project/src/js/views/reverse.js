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
      <div className="card center">
        <p>reversed: {content}</p>
        <div className="form-group">
          <input ref={(node) => this.input = node}
            disabled={progress} type='text' size='32'/>
          <button onClick={() => this.onClick()}
            disabled={progress}>reverse</button>
        </div>
      </div>
    );
  }
}

ReverseComponent.defaultProps = {
  content: EMPTY_STRING
}
