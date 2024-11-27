import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('The Child component is being unmounted!');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class LifecyclePart3Unmounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true,
    };
  }

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        {this.state.show && <Child />}
        <button onClick={this.handleDelete}>Delete Child</button>
      </div>
    );
  }
}

export default LifecyclePart3Unmounting;