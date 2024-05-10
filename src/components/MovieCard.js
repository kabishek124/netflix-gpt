import React from "react";
import { POSTERURL } from "../utils/Constants/constants";

const MovieCard = ({ key, posterPath }) => {
  return (
    <div className="w-32 m-4">
      <img src={POSTERURL + posterPath} alt="moviePoster" />
    </div>
  );
};

export default MovieCard;
