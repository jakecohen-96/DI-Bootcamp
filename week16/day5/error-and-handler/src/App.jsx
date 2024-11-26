import { useState } from "react";
import Counter from "../components/Counter";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>count: {count}</h1>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;