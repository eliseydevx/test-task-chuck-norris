import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJokes = createAsyncThunk(
  "jokes/fetchJokes",
  async (searchTerm: string) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${searchTerm}`
    );
    return response.data.result;
  }
);

interface Joke {
  created_at: string;
  id: string;
  url: string;
  value: string;
}

interface JokesState {
  jokes: Joke[];
  isLoading: boolean;
  error: string | null;
}

const initialState: JokesState = {
  jokes: [],
  isLoading: false,
  error: null,
};

const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jokes = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {} = jokesSlice.actions;
export { jokesSlice };
