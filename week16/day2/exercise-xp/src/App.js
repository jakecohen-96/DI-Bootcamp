import React from "react";
import "./App.css";
import Exercise1 from "./components/exercise1";
import Exercise2 from "./components/exercise2";
import Exercise3 from "./components/exercise3";



function App() {
  return (
    <div className="App">
      <h1>Exercise 1</h1>
      <Exercise1 />

      <h1>Exercise 2</h1>
      <Exercise2 />

      <h1>Exercise3</h1>
      <Exercise3 />
    </div>
  );
}

export default App;