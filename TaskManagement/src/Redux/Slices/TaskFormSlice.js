import { createSlice } from "@reduxjs/toolkit";

const taskFormSlice = createSlice({
  name: "TaskForm",
  initialState: { component: "", open: false },
  reducers: {
    openTaskForm: (state, action) => {
      state.open = true;
      state.component = action.payload || "";
    },
    closeTaskForm: (state, action) => {
      state.component = "";
      state.open = false;
    },
  },
});
export const { openTaskForm, closeTaskForm } = taskFormSlice.actions;
export default taskFormSlice.reducer;
