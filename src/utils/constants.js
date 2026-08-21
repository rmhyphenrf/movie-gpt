export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTVjN2JlNmZmYTVkMzlkOWQ4NGVmNDM2ZjFlMWVmMyIsIm5iZiI6MTc4NzA2ODMxNi44NzMsInN1YiI6IjZhODQ3ZjljOGQ1ZDk4NzJlMTY3MDIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tCtgzyKZ4uoYTQzIWXAAznBZIaPvdGL5Jat3xlBObNM";
export const API_KEY = "ca5c7be6ffa5d39d9d84ef436f1e1ef3";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTVjN2JlNmZmYTVkMzlkOWQ4NGVmNDM2ZjFlMWVmMyIsIm5iZiI6MTc4NzA2ODMxNi44NzMsInN1YiI6IjZhODQ3ZjljOGQ1ZDk4NzJlMTY3MDIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tCtgzyKZ4uoYTQzIWXAAznBZIaPvdGL5Jat3xlBObNM",
  },
};
export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const VIDEO_TRAILER_URL = {
  URL: (id) => `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
};
export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w500";
