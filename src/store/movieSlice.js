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
    addNowPlayingMovieList: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMoviesList: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMoviesList: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMoviesList: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovieList,
  addPopularMoviesList,
  addMovieTrailer,
  addTopRatedMoviesList,
  addUpcomingMoviesList,
} = movieSlice.actions;

export default movieSlice.reducer;
