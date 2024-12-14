import { useState, useReducer } from "react";

import "./App.css";

const initialState = {
  tasks: [{ id: 1, name: "shopping", active: true }],
};

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            name: action.payload.name,
            active: true,
          },
        ],
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: { name: taskName } });
    setTaskName("");
  };

  return (
    <>
      <h2>Add Task</h2>
      <div>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h2>Tasks List</h2>
        <ul>
          {state.tasks.map((task) => (
            <li key={task.id}>
              {task.name} {task.active && "(Active)"}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;