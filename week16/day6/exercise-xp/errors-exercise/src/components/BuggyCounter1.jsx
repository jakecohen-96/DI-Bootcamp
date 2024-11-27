import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => {
      if (counter === 4) {
        throw new Error('oh no, something is wrong we are crashing!');
      }
      return { counter: counter + 1 };
    });
  };

  render() {
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BuggyCounter;