import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import tabsReducer from "./Slices/TabSlice";
import taskFormReducer from './Slices/TaskFormSlice';
import taskReducer from './Slices/TaskSlice';
import checkedReducer from  './Slices/CheckedTask';
import searchTextReducer from './Slices/SearchText';

export const Store = configureStore({
  reducer: { 
    user: userReducer,
    tab: tabsReducer,
    taskForm:taskFormReducer,
    task: taskReducer,
    check:checkedReducer,
    searchText:searchTextReducer,
  },
});
  