import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
    name:'searchText',
    initialState:{text:''},
    reducers:{
        setSearchText:(state,action)=>{
            state.text = action.payload;
        },
        clearSearchText:(state,action)=>{
            state.text = "";
        }
    }
});

export const {setSearchText,clearSearchText} = searchTextSlice.actions;
export default  searchTextSlice.reducer;