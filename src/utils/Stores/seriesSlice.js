import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    airingSeries: null,
    onTheAirSeries: null,
    popularSeries: null,
    topRatedSeries: null,
  },
  reducers: {
    addAiringSeries: (state, action) => {
      state.airingSeries = action.payload;
    },
    removeAiringSeries: (state) => {
      state.airingSeries = null;
    },
    addOnTheAirSeries: (state, action) => {
      state.onTheAirSeries = action.payload;
    },
    removeOnTheAirSeries: (state) => {
      state.onTheAirSeries = null;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    removePopularSeries: (state) => {
      state.popularSeries = null;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    removeTopRatedSeries: (state) => {
      state.topRatedSeries = null;
    },
  },
});

export const {
  addAiringSeries,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
  removeAiringSeries,
  removeOnTheAirSeries,
  removePopularSeries,
  removeTopRatedSeries,
} = seriesSlice.actions;

export default seriesSlice.reducer;
