import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { id: 1, title: "Finish Redux exercise", completed: false, categoryId: 1 },
        { id: 2, title: "Read a book", completed: false, categoryId: 2 },
        { id: 3, title: "Workout", completed: true, categoryId: 3 }
    ]
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, title } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) task.title = title;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        }
    }
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;