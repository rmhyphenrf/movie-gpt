import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMoviesList } from "../store/movieSlice";

const useGetPopularMovies = () => {
  const disp = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    disp(addPopularMoviesList(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularMovies;
