import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../store/taskSlice";

const TaskForm = ({ selectedDate, editMode, existingTask, onCancel }) => {
  const [task, setTask] = useState(existingTask || "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(editTask({ date: selectedDate, taskId: editMode, newText: task }));
    } else {
      dispatch(addTask({ date: selectedDate, task }));
    }
    setTask("");
    onCancel(); // Close form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">{editMode ? "Update" : "Add Task"}</button>
      {editMode && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TaskForm;