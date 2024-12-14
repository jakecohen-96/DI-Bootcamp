import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskList = () => {
    const { tasks, dispatch } = useTasks();

    if (tasks.length === 0) {
        return <p>No tasks available. Add a task to get started!</p>;
    }

    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {tasks.map((task) => (
                <li
                    key={task.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                        background: task.completed ? 'green' : 'black',
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                >
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                    >
                        {task.text}
                    </span>
                    <button
                        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
                        style={{
                            background: '#dc3545',
                            color: '#fbff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            padding: '5px 10px',
                        }}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;