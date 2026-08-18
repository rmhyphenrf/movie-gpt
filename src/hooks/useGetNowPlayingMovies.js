import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovieList } from "../store/movieSlice";

const useGetNowPlayingMovies = () => {
  const disp = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    disp(addNowPlayingMovieList(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
