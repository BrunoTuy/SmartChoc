import React, { createContext, Component } from 'react';

export const RDContext = createContext();

const { Provider, Consumer } = RDContext;

export const RDConsumer = Consumer;

export class RDProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      listChat: [],
      typing: true,
    };
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          setState: props => this.setState( props ),
        }}>
        {this.props.children}
      </Provider>
    );
  }
}
