import { useEffect } from "react";
import { API_OPTIONS, VIDEO_TRAILER_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../store/movieSlice";

const useGetVideoTrailer = (id) => {
  const disp = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(VIDEO_TRAILER_URL.URL(id), API_OPTIONS);
    const json = await data.json();
    const trailers = json.results.filter((mov) => mov.type === "Trailer");
    const actualTrailer =
      trailers.length > 1
        ? trailers.filter((item) => item.name === "Official Trailer")
        : trailers;
    disp(addMovieTrailer(actualTrailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetVideoTrailer;
