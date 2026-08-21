import { useSelector } from "react-redux";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import MovieCard from "./MovieCard";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";

const MovieCategory = ({categories}) => {
    useGetPopularMovies();
    useGetTopRatedMovies();
    useGetUpcomingMovies();
    const movieList = useSelector((store) => store.movies);
    const popularMovieList = movieList?.popularMovies;
    const nowPlayingMovieList = movieList?.nowPlayingMovies;
    const topRatedMovieList = movieList?.topRatedMovies;
    const upcomingMovieList = movieList?.upcomingMovies;

    return (
        <div className="w-full bg-black">

            <div className="mx-4 px-5 -my-4 text-gray-400 absolute z-20">{categories[2]}</div>
            <div className="flex mx-4 p-5 overflow-x-scroll scrollbar-none">
                {topRatedMovieList && topRatedMovieList.map((mov) => <MovieCard key={mov.id} movieData={mov} />)}
            </div>
            
            <div className="mx-4 px-5 -my-4 text-gray-400 absolute z-20">{categories[0]}</div>
            <div className="flex mx-4 p-5 overflow-x-scroll scrollbar-none">
                {nowPlayingMovieList && nowPlayingMovieList.map((mov) => <MovieCard key={mov.id} movieData={mov} />)}
            </div>

            <div className="mx-4 px-5 -my-4 text-gray-400 absolute z-20">{categories[3]}</div>
            <div className="flex mx-4 p-5 overflow-x-scroll scrollbar-none">
                {upcomingMovieList && upcomingMovieList.map((mov) => <MovieCard key={mov.id} movieData={mov} />)}
            </div>

            <div className="mx-4 px-5 -my-4 text-gray-400 absolute z-20">{categories[1]}</div>
            <div className="flex mx-4 p-5 overflow-x-scroll scrollbar-none">
                {popularMovieList && popularMovieList.map((mov) => <MovieCard key={mov.id} movieData={mov} />)}
            </div>

        </div>
    )
}

export default MovieCategory;