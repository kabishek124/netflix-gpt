import React from "react";
import MovieCard from "./MovieCard";
import { Title } from "@storybook/blocks";

const MovieList = ({ title, movies }) => {
  //console.log(movies[0].poster_path+"00000000000000000000000000000000");
  return (
    <div className="pt-10 pl-4">
      <h1 className="text-red-600 text-3xl font-extrabold pl-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies && (
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
