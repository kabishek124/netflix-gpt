import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchButton: false,
  },
  reducers: {
    isToggled: (state) => {
      state.searchButton = !state.searchButton;
    },
  },
});

export const { isToggled } = gptSlice.actions;
export default gptSlice.reducer;
