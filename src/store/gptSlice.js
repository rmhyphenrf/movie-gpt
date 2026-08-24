import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    langObj: {},
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setLanguage: (state, action) => {
      state.langObj = action.payload;
    }
  },
});

export const {toggleGptSearch, setLanguage} = gptSlice.actions;

export default gptSlice.reducer;