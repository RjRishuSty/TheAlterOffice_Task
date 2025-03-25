import { createSlice } from "@reduxjs/toolkit";
import { setSelectedTaskToUpdate } from "./TaskSlice";

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

export const closeTaskFormAndResetTask = () => (dispatch) => {
  dispatch(closeTaskForm());
  dispatch(setSelectedTaskToUpdate(null)); // Reset selectedTask
};
export const { openTaskForm, closeTaskForm } = taskFormSlice.actions;
export default taskFormSlice.reducer;
 