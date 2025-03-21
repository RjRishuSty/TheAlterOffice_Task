import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import tabsReducer from "./Slices/TabSlice";

export const Store = configureStore({
  reducer: {
    user: userReducer,
    tab: tabsReducer,
  },
});
