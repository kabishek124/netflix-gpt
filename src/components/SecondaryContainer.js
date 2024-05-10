import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  //getting movies from the stores
  const movies = useSelector((store) => store.movies);
  const series = useSelector((store) => store.series);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-52 z-30 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular Series"} movies={series.popularSeries} />
          <MovieList title={"Airing Series"} movies={series.airingSeries} />
          <MovieList
            title={"Top Rated Series"}
            movies={series.topRatedSeries}
          />
          <MovieList
            title={"On The Air Series"}
            movies={series.onTheAirSeries}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
