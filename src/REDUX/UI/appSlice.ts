import {createSlice} from "@reduxjs/toolkit";
import type {SearchCache} from "../../COMPONENTS/SearchBar.tsx";

type AppState = {
    hamburgerOpen: boolean;
    sm_hamState:boolean,
    search: string;
    cacheSearch: SearchCache;
    smallYoutube:boolean;
    isAtStart:boolean;
    isAtEnd:boolean
}

const initialState: AppState={
    hamburgerOpen: true,
    sm_hamState:true,
    search: "",
    cacheSearch:{},
    smallYoutube:false,
    isAtStart:true,
    isAtEnd:false
}


const appSlice = createSlice({
    name: 'app',
    initialState
   ,
    reducers: {
        smallYoutubeHamburger: (state, action) => {
            state.sm_hamState = action.payload;
        },
        toggleHamburger: (state) => {
            state.hamburgerOpen = !state.hamburgerOpen
        }
        ,
        closeMenu: (state) => {
            state.hamburgerOpen = true
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setCacheSearch: (state, action) => {
            state.cacheSearch = { ...state.cacheSearch, ...action.payload };
        },
        setSmallYoutube:(state,action)=>{
            state.smallYoutube=action.payload
        },
        setIsAtStart:(state,action)=>{
            state.isAtStart=action.payload

        },
        setIsAtEnd:(state,action)=>{
            state.isAtEnd=action.payload
        }
    }
});


export const {toggleHamburger, closeMenu, setSearch,setCacheSearch,smallYoutubeHamburger,setSmallYoutube,setIsAtStart,setIsAtEnd} = appSlice.actions
export default appSlice.reducer;