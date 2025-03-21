import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "Tab",
  initialState: "list",
  reducers: {
    TabChange: (state, action) => {
      return action.payload;
    },
  },
});

export const { TabChange } = tabSlice.actions;
export default tabSlice.reducer;
