import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddTask from './components/AddTask';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <TaskProvider>
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Task Manager</h1>
                <AddTask />
                <TaskFilter />
                <TaskList />
            </div>
        </TaskProvider>
    );
};

export default App;