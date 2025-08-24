import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {
    YOUTUBE_VIDEO_API
} from "../../CONSTANTS/YOUTUBE_VIDEO_API.tsx";


type MoviesState = {
    data: any[] | null;
    loading: boolean;
    error: string | null;
}
export const fetchVideos = createAsyncThunk<any[], void, { rejectValue: string}>
(
    'movies/fetchMovies', async (_, thunkAPI) => {
        try {
            const response = await axios.get(YOUTUBE_VIDEO_API);
            return response.data?.items
        } catch (e: any) {
            return thunkAPI.rejectWithValue((e.message || "Failed to fetch movies"))
        }
    })

const initialState: MoviesState = {
    data: null,
    loading: false,
    error: null
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? 'Unknown error';

            })
    }
})

export default moviesSlice.reducer;
