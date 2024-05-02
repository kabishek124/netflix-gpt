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
    <div>
      {movieId}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + movieTrailerKey?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
