import React, { Component } from 'react';

const Context = React.createContext();

export class provider extends Component {
  render() {
    return (
      <Context.Provider>
        {this.props.children}
      </Context.Provider>
    )
  }
}

