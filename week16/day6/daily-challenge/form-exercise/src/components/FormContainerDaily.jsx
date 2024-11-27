import React, { Component } from 'react';

class FormContainerDaily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(this.state).toString();
    window.location.href = `http://localhost:5173/?${queryParams}`;
  };

  render() {
    return (
      <div>
        <h1>Sample Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">Select your destination</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={this.state.nutsFree}
              onChange={this.handleChange}
            />
            Nuts Free
          </label>
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={this.state.lactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free
          </label>
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={this.state.vegan}
              onChange={this.handleChange}
            />
            Vegan Meal
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

        <h2>Entered Information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <ul>
          <li>Nuts free: {this.state.nutsFree ? 'Yes' : 'No'}</li>
          <li>Lactose free: {this.state.lactoseFree ? 'Yes' : 'No'}</li>
          <li>Vegan meal: {this.state.vegan ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    );
  }
}

export default FormContainerDaily;