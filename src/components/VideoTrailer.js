import React, { useEffect } from "react";
import movieService from "../utils/services/movieService";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/stores/movieSlice";

const VideoTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  //console.log(movieTrailerKey+ "ffffffffffffffffff");

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  const getMovieVideos = async () => {
    const response = await movieService.getOneMovieTrailer(movieId);

    const trailer = response?.results?.filter(
      (video) => video.type === "Trailer"
    );
    //after filtering the trailer video, get the trailer video if not whatever the first video
    const video = trailer.length ? trailer[0] : response.results[0];

    dispatch(addMovieTrailer(video));
  };
  const movieTrailerKey = useSelector((store) => store?.movies?.movieTrailer);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailerKey?.key +
          "?&autoplay=1&mute=1&control=0&rel=0&modestbranding=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
