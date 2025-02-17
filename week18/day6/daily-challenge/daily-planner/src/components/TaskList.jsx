import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";

const TaskList = ({ selectedDate, onEditTask }) => {
  const tasks = useSelector((state) => state.tasks.tasks[selectedDate] || []);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEditTask(task.id, task.text)}>Edit</button>
          <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;