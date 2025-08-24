import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import movieReducer from "./movieSlice"

const appStore =configureStore({
    reducer:{
        app:appReducer,
        movie:movieReducer
    }
})


export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;