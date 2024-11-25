import { useState } from "react";

const Events = () => {
  const [inputValue, setInputValue] = useState(""); // State for input value
  const [isToggleOn, setIsToggleOn] = useState(true); // State for toggle button

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert(`User says: ${inputValue}`);
    }
  };

  const handleClick = () => {
    console.log("I am the first button; I was clicked");
  };

  const toggleState = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Please click me</button>
      </div>
      <div>
        <button onClick={() => console.log("Second button; I was clicked")}>
          Another Click Button
        </button>
      </div>
      <div>
        <input
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleState}>
          {isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
};

export default Events;