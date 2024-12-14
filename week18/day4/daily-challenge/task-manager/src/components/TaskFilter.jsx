import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskFilter = () => {
    const { setFilter } = useTasks();

    return (
        <div>
            <button onClick={() => setFilter('all')} style={{ marginRight: '10px' }}>
                Show All
            </button>
            <button onClick={() => setFilter('completed')} style={{ marginRight: '10px' }}>
                Show Completed
            </button>
            <button onClick={() => setFilter('active')}>Show Active</button>
        </div>
    );
};

export default TaskFilter;