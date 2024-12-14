import React, { createContext, useReducer, useContext, useState } from 'react';

const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'TOGGLE_TASK':
            return state.map((task) =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        case 'REMOVE_TASK':
            return state.filter((task) => task.id !== action.payload);
        case 'EDIT_TASK':
            return state.map((task) =>
                task.id === action.payload.id ? { ...task, text: action.payload.text } : task
            );
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [filter, setFilter] = useState('all');

    return (
        <TaskContext.Provider value={{ tasks, dispatch, filter, setFilter }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);