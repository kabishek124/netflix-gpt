import React from "react";
import { POSTERURL } from "../utils/Constants/constants";

const MovieCard = ({ key, posterPath }) => {
  return (
    <div className="w-32 m-4 rounded-lg shadow-lg">
      <img
        src={POSTERURL + posterPath}
        alt="moviePoster"
        className=" cursor-pointer border border-cyan-300 w-full h-auto"
      />
    </div>
  );
};

export default MovieCard;
