import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpcomingMoviesList } from "../store/movieSlice";
import { useEffect } from "react";

const useGetUpcomingMovies = () => {
  const disp = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    disp(addUpcomingMoviesList(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useGetUpcomingMovies;
