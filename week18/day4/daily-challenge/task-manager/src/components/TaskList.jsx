import React, { useState, useRef } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskList = () => {
    const { tasks, dispatch, filter } = useTasks();
    const [editingTaskId, setEditingTaskId] = useState(null);
    const editRef = useRef(null);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    });

    const handleEdit = (id, text) => {
        setEditingTaskId(id);
        setTimeout(() => {
            if (editRef.current) {
                editRef.current.value = text;
                editRef.current.focus();
            }
        }, 0);
    };

    const saveEdit = (id) => {
        dispatch({ type: 'EDIT_TASK', payload: { id, text: editRef.current.value } });
        setEditingTaskId(null);
    };

    if (filteredTasks.length === 0) {
        return <p>No tasks to display.</p>;
    }

    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filteredTasks.map((task) => (
                <li
                    key={task.id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '10px',
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                >
                    {editingTaskId === task.id ? (
                        <input
                            ref={editRef}
                            style={{ flexGrow: 1, marginRight: '10px', padding: '5px' }}
                            onBlur={() => saveEdit(task.id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') saveEdit(task.id);
                                if (e.key === 'Escape') setEditingTaskId(null);
                            }}
                        />
                    ) : (
                        <span
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                                flexGrow: 1,
                            }}
                            onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                        >
                            {task.text}
                        </span>
                    )}
                    <button
                        onClick={() => handleEdit(task.id, task.text)}
                        style={{ marginRight: '10px' }}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
                        style={{ padding: '5px 10px' }}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;