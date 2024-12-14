import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const AddTask = () => {
    const [taskText, setTaskText] = useState('');
    const { dispatch } = useTasks();

    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch({ type: 'ADD_TASK', payload: taskText });
            setTaskText('');
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a task..."
                style={{
                    padding: '10px',
                    width: '80%',
                    maxWidth: '400px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}
            />
            <button
                onClick={handleAddTask}
                style={{
                    padding: '10px 20px',
                    marginLeft: '10px',
                    background: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Add Task
            </button>
        </div>
    );
};

export default AddTask;