import React, { useEffect } from "react";
import Header from "./Header";
import movieService from "../utils/services/movieService";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/stores/movieSlice";
import Container from "./Container";

const Browse = () => {
  const dispatch = useDispatch();
  //fetching the now playing movies
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const response = await movieService.getNowPlayingMovies();
      console.log(response.results);
      dispatch(addNowPlayingMovies(response.results));
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
};

export default Browse;
