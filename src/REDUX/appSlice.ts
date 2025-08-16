import {createSlice} from "@reduxjs/toolkit";

const appSlice=createSlice({
name:'app',
    initialState:{
    hamburgerOpen: true
    },
    reducers:{
    toggleHamburger:(state)=>{
        state.hamburgerOpen=!state.hamburgerOpen
    }
    }
});


export const {toggleHamburger} = appSlice.actions
export default appSlice.reducer;