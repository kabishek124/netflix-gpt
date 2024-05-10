import React, { useEffect } from "react";
import Header from "./Header";
import movieService from "../utils/services/movieService";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/stores/movieSlice";
import Container from "./Container";
import SecondaryContainer from "./SecondaryContainer";
import seriesService from "../utils/services/seriesService";
import {
  addAiringSeries,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
} from "../utils/stores/seriesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  //fetching the now playing movies
  useEffect(() => {
    getNowPlayingMovies();
    getPOpularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
    getPopularSeries();
    getTopRatedSeries();
    getAiringSeries();
    getOnTheAirSeries();
  }, []);

  //getting all types of movies to shown in the browse page

  //Getting now playing movies
  const getNowPlayingMovies = async () => {
    try {
      const response = await movieService.getNowPlayingMovies();
      dispatch(addNowPlayingMovies(response.results));
    } catch (error) {
      throw error;
    }
  };

  //Getting popular movies
  const getPOpularMovies = async () => {
    try {
      const response = await movieService.getPopularMovies();
      dispatch(addPopularMovies(response.results));
    } catch (error) {
      throw error;
    }
  };

  //Getting top rated movies
  const getTopRatedMovies = async () => {
    try {
      const response = await movieService.getTopRatedMovies();
      dispatch(addTopRatedMovies(response.results));
    } catch (error) {
      throw error;
    }
  };

  //Getting Upcoming movies
  const getUpcomingMovies = async () => {
    try {
      const response = await movieService.getUpcomingMovies();
      dispatch(addUpcomingMovies(response.results));
    } catch (error) {
      throw error;
    }
  };

  //Getting popular series
  const getPopularSeries = async () => {
    try {
      const response = await seriesService.getPopularSeries();
      dispatch(addPopularSeries(response.results));
    } catch (error) {
      throw error;
    }
  };

  // Getting Top rated series
  const getTopRatedSeries = async () => {
    try {
      const response = await seriesService.getTopRatedSeries();
      dispatch(addTopRatedSeries(response.results));
    } catch (error) {
      throw error;
    }
  };

  //Getting airing series
  const getAiringSeries = async () => {
    try {
      const response = await seriesService.getAiringSeries();
      dispatch(addAiringSeries(response.results));
    } catch (error) {
      throw error;
    }
  };

  // Getting on the air series
  const getOnTheAirSeries = async () => {
    try {
      const response = await seriesService.getOnTheAirSeries();
      dispatch(addOnTheAirSeries(response.results));
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Header />
      <Container />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
