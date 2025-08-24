import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./UI/appSlice.ts";
import apiReducer from "./THUNK/MoviesSlice.ts"

const appStore = configureStore({
    reducer: {
        app: appReducer,
        movies: apiReducer,
    }
})


export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;