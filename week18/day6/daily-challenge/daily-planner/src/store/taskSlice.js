import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {}, 
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push({ id: Date.now(), text: task });
    },
    editTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      if (state.tasks[date]) {
        const task = state.tasks[date].find((t) => t.id === taskId);
        if (task) task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      if (state.tasks[date]) {
        state.tasks[date] = state.tasks[date].filter((t) => t.id !== taskId);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;