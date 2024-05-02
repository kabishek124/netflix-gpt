import React, { useEffect, useState } from "react";
import VideoTrailer from "./VideoTrailer";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const Container = () => {
  const [randomMovie, setRandomMovie] = useState(0);
  //get movies from the store
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setRandomMovie(Math.floor(Math.random() * movies.length));
    }
  }, [movies]);

  if (!movies || !movies[randomMovie]) return null;
  //console.log(movies[randomMovie]);
  const { title, overview, id } = movies[randomMovie];

  return (
    <div>
      <VideoTrailer movieId={id} />
      <VideoInfo title={title} overview={overview} />
    </div>
  );
};

export default Container;
