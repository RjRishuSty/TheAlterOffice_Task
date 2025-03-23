import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "Task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
       state.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
