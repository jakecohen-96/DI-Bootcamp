import React, { Component } from 'react';

class LifecyclePart1 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;

    // for testing purposes, uncomment the next line 
    // return false;
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default LifecyclePart1;