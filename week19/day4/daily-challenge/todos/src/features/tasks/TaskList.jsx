import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "./state/slice";

const TaskList = ({ selectedDate }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.date === selectedDate)
  );

  const handleDelete = (id) => {
    dispatch(deleteTask({ id }));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;