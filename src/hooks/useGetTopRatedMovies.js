import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMoviesList } from "../store/movieSlice";
import { useEffect } from "react";

const useGetTopRatedMovies = () => {
  const disp = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    disp(addTopRatedMoviesList(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useGetTopRatedMovies;
