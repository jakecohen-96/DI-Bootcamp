import React, { createContext, useReducer, useContext } from 'react';

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
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};


export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTasks = () => useContext(TaskContext);