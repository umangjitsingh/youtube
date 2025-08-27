import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./UI/appSlice.ts";
import movieReducer from "./THUNK/MoviesSlice.ts";
import shortsReducer from './THUNK/ShortsSlice.ts'


const appStore = configureStore({
    reducer: {
        app: appReducer,
        movies: movieReducer,
        shorts:shortsReducer
    }
})


export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;