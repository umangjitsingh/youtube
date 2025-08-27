import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        hamburgerOpen: true,


    },
    reducers: {
        toggleHamburger: (state) => {
            state.hamburgerOpen = !state.hamburgerOpen
        },
        closeMenu: (state) => {
        state.hamburgerOpen=true
        }
    }
});


export const {toggleHamburger,closeMenu} = appSlice.actions
export default appSlice.reducer;