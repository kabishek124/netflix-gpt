import React from "react";
import { POSTERURL } from "../utils/Constants/constants";

const MovieCard = ({ key, posterPath }) => {
  return (
    <div className="w-32 m-4 hover:border hover:border-green-600">
      <img
        src={POSTERURL + posterPath}
        alt="moviePoster"
        className=" cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
