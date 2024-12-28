import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./state/slice";

const TaskInput = ({ selectedDate }) => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText, date: selectedDate }));
      setTaskText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;