import React, { Component } from 'react';

class LifecyclePart3 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    console.log('Previous state:', prevState.favoriteColor);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}

export default LifecyclePart3;