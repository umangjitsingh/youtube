import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";


type ShortsState = {
    data: any[] | null;
    loading: boolean;
    error: string | null;
}
const initialState: ShortsState = {
    data: null,
    loading: false,
    error: null
}

export const fetchShorts = createAsyncThunk<any[], string[], { rejectValue: string}>('shorts/fetchShorts', async (urls: string[], thunkAPI) => {
    try {
        const responses = await Promise.all(urls.map((url) => axios.get(url)));
        return responses.map((res) => res.data);
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.message || "Failed to fetch Shorts");
    }
});
const shortsSlice = createSlice({
    name: 'shorts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchShorts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchShorts.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchShorts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload ?? "Unknown Error"
        })
    }
})

export default shortsSlice.reducer