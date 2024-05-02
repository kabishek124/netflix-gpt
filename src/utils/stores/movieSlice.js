import { createSlice } from "@reduxjs/toolkit";
import { remove } from "firebase/database";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    removeMovieTrailer: (state) => {
      state.movieTrailer = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  removeMovieTrailer,
  removeNowPlayingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
