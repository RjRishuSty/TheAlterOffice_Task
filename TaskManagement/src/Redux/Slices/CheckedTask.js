import {createSlice} from '@reduxjs/toolkit';

const checkedSlice = createSlice({
    name:'checkedTask',
    initialState:[],
    reducers:{

        addToChecked: (state, action) => {
            state.push(action.payload);
        },
        unChecked: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },
        clearChecked: () => {
            return [];
        }
    }
});

export const { addToChecked, unChecked, clearChecked } = checkedSlice.actions;
export default checkedSlice.reducer;