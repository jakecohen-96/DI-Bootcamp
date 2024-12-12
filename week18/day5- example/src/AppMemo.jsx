import { useState } from "react";
import ToDo from "./components/ToDo";

const AppMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    setTodos(todos => [...todos, 'new task'])
  }
  return (
    <>
      <h2>memo, useCallback, useMemo</h2>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          count:{count}
        </button>
      </div>
      <button onClick={addTask}>Add Task</button>
      <ToDo todos={todos}/>
    </>
  );
};
export default AppMemo;
