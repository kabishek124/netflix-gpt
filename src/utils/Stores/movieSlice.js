import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
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
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    removePopularMovies: (state) => {
      state.popularMovies = null;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeTopRatedMovies: (state) => {
      state.topRatedMovies = null;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    removeUpcomingMovies: (state) => {
      state.upcomingMovies = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  removeMovieTrailer,
  removeNowPlayingMovies,
  addPopularMovies,
  removePopularMovies,
  addTopRatedMovies,
  removeTopRatedMovies,
  addUpcomingMovies,
  removeUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
