import React, { Component } from 'react';

class LifecyclePart2 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('after update');
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}

export default LifecyclePart2;