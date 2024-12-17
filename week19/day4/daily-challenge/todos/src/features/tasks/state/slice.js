import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
  };
  
  const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
      addTask: (state, action) => {
        const { text, date } = action.payload;
        state.tasks.push({
          id: nanoid(),
          text,
          date,
        });
      },
    },
  });
  
  export const { addTask } = taskSlice.actions;
  export default taskSlice.reducer; 