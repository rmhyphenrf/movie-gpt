import { useSelector } from "react-redux";
import VideoTrailer from "./VideoTrailer";

const MovieDetail = () => {
    const movies = useSelector((state) => state.movies.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[0];
    return (<div className="w-full min-h-screen">
        <div className="absolute aspect-video inset-0 z-0"><VideoTrailer movieId={mainMovie.id} /></div>
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/90 via-black/40"></div>
        <div className="absolute left-10 top-1/2 w-1/3 z-20 text-white text-shadow">
            <h1 className="m-4 p-4 font-bold text-4xl">{mainMovie.original_title}</h1>
            <p className="m-4 px-4">{mainMovie.overview}</p>
            <div className="absolute my-4 left-10 z-20">
            <button className="px-9 py-2 bg-white rounded text-black cursor-pointer hover:bg-white/80">▷ Play</button>
            <button className="mx-2 px-7 py-2 bg-gray-500/60 rounded cursor-pointer hover:bg-gray-600/60">More Info</button>
        </div>
        </div>        
    </div>)
}

export default MovieDetail;