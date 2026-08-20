import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import Header from "./Header";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

const Browse = () => {
    useGetNowPlayingMovies();

    return (
        <div className="relative w-screen h-screen">
            <div className="absolute z-40 w-full"><Header /></div>
            <MovieDetail />
            <div className=""><MovieList /></div>
        </div>
    )
}

export default Browse;