import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import Header from "./Header";
import MovieDetail from "./MovieDetail";

const Browse = () => {
    useGetNowPlayingMovies();

    return (
        <div className="relative min-h-screen min-w-full overflow-hidden">
            <div className="absolute w-full z-20"><Header /></div>
            <MovieDetail />
        </div>
    )
}

export default Browse;