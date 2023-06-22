import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import genresService from "./genresService";

const initialState = {
  genres: [],
};

export const getAllGenres = createAsyncThunk(
  "genres/getAllGenres",
  async () => {
    try {
      return await genresService.getAll();
    } catch (error) {
      console.error(error);
    }
  }
);

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export default genresSlice.reducer;