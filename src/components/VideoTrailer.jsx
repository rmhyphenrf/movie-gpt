import { useSelector } from "react-redux";
import useGetVideoTrailer from "../hooks/useGetVideoTrailer";

const VideoTrailer = ({movieId}) => {
    useGetVideoTrailer(movieId);
    const trailerObj = useSelector((state) => state.movies.movieTrailer);
    if (!trailerObj) return;
    return (
        <div className="absolute w-full h-screen">
            <iframe
                className="w-full h-full"
                src={"https://www.youtube.com/embed/" + trailerObj.key + "?si=3eaTDnrl4oNaJAtx&autoplay=1&mute=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoTrailer;