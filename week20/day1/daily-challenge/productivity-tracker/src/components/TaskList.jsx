import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../features/tasks/tasksSelectors';
import { toggleTaskCompletion } from '../features/tasks/tasksSlice';

const TaskList = ({ categoryId }) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleTaskCompletion(task.id))}
                        />
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;