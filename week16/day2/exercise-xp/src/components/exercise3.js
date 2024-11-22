import React from "react";
import "../styles/exercise3.css";

class Exercise3 extends React.Component {
  render() {
    // Part 2: Inline styles for the <h1> tag
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div className="exercise-container">
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>

        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          This is a Link
        </a>

        <form className="form">
          <h3>This is a Form:</h3>
          <label htmlFor="name">Enter your name:</label>
          <input type="text" id="name" name="name" className="input" />
          <button type="submit" className="button">
            Submit
          </button>
        </form>

        <div className="image-section">
          <h3>Here is an Image:</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            className="react-logo"
          />
        </div>

        <div className="list-section">
          <h3>This is a List:</h3>
          <ul className="list">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Exercise3;