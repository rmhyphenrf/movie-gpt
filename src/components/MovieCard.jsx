import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ movieData }) => {
    return (
        <div className="mr-3 shrink-0 w-40 z-50">
            <img className="rounded" src={MOVIE_POSTER_URL + movieData.poster_path}></img>
        </div>
    )
}

export default MovieCard;