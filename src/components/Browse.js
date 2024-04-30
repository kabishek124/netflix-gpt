import React, { useEffect } from "react";
import Header from "./Header";
import movieService from "../utils/services/movieservice";

const Browse = () => {
  //fetching the now playing movies
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const response = await movieService.getNowPlayingMovies();
      console.log(response.results);
    } catch (error) {
      throw error
    }
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
