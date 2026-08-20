import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovieList: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMoviesList: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovieList, addPopularMoviesList, addMovieTrailer } =
  movieSlice.actions;

export default movieSlice.reducer;
