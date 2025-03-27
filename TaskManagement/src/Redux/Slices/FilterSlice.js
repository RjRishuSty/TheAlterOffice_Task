import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
    initialState:{category:'',date:""},
    reducers:{
        addFilterByCategory:(state,action)=>{
            state.category= action.payload;
        },
        addFilterByDate:(state,action)=>{
            state.date= action.payload;
        }
    }

});

export const {addFilterByCategory,addFilterByDate} = filterSlice.actions;
export default filterSlice.reducer;