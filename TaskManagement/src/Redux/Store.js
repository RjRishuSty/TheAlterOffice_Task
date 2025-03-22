import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import tabsReducer from "./Slices/TabSlice";
import taskFormReducer from './Slices/TaskFormSlice';
import taskReducer from './Slices/TaskSlice';

export const Store = configureStore({
  reducer: {
    user: userReducer,
    tab: tabsReducer,
    taskForm:taskFormReducer,
    task: taskReducer,
  },
});
