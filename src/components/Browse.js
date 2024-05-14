import React, { useEffect } from "react";
import Header from "./Header";
import movieService from "../utils/Services/movieService";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/Stores/movieSlice";
import Container from "./Container";
import SecondaryContainer from "./SecondaryContainer";
import seriesService from "../utils/Services/seriesService";
import {
  addAiringSeries,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
} from "../utils/Stores/seriesSlice";
import useMovieData from "../utils/CustomHooks/useMovieData";
import useSeriesData from "../utils/CustomHooks/useSeriesData";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.searchButton);

  //getting all types of movies to shown in the browse page
  useMovieData();

  //getting all types of series to shown in the browse page
  useSeriesData();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <Container />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
