import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './state/slice';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
  
    const handleAddTask = () => {
      if (task.trim() && date) {
        dispatch(addTask({ text: task, date })); 
        setTask(''); 
        setDate('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Add task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    );
  };
  
  export default TaskInput;