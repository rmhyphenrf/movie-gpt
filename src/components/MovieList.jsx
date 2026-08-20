import { movieCategories } from "../utils/categories";
import MovieCategory from "./MovieCategory";

const MovieList = () => {
    return (
        <div className="-my-35">
            <MovieCategory categories={movieCategories} />
        </div>
    )
}

export default MovieList;