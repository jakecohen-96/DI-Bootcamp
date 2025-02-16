import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.tasks;

export const selectTasksByCategory = createSelector(
    [selectTasks, (_, categoryId) => categoryId],
    (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
    [selectTasks],
    (tasks) => tasks.filter(task => task.completed).length
);