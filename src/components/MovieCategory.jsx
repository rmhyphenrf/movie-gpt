import { useSelector } from "react-redux";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import MovieCard from "./MovieCard";

const MovieCategory = ({categories}) => {
    useGetPopularMovies();
    const movieList = useSelector((store) => store.movies);
    const popularMovieList = movieList?.popularMovies;
    const nowPlayingMovieList = movieList?.nowPlayingMovies;
    console.log(popularMovieList, nowPlayingMovieList, 'lists');

    return (
        <div className="absolute z-20 w-screen bg-black">
            <div className="mx-4 px-4 text-gray-400">{categories[0]}</div>
            <div className="flex mx-4 p-4 overflow-x-scroll scrollbar-none">
                {nowPlayingMovieList && nowPlayingMovieList.map((mov) => <MovieCard key={mov.id} movieData={mov} />)}
            </div>

            <div className="mx-4 px-4 text-gray-400">{categories[1]}</div>
            <div className="flex mx-4 p-4 overflow-x-scroll scrollbar-none">
                {popularMovieList && popularMovieList.map((mov) => <MovieCard key={mov.id} movieData={mov} />)}
            </div>
        </div>
    )
}

export default MovieCategory;