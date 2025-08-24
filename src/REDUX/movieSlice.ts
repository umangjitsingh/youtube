import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        mostPopular: null
    },
    reducers: {
        addMostPopular: (state, action) =>{
            state.mostPopular = action.payload
        }

    }
})

export const {addMostPopular} = movieSlice.actions;
export default movieSlice.reducer;