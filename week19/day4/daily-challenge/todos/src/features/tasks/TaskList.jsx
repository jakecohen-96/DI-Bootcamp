import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    const sortedTasks = [...tasks].sort((a, b) => new Date(a.date) - new Date(b.date));
  
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {sortedTasks.map((task) => (
            <li key={task.id}>
              <strong>{task.text}</strong> - {task.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;