import { useEffect } from "react";
import movieService from "../Services/movieService";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../Stores/movieSlice";

const useMovieData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMOviesData();
  }, []);

  const fetchMOviesData = async () => {
    try {
      const popularMovies = await movieService.getPopularMovies();
      const nowPlayingMovies = await movieService.getNowPlayingMovies();
      const topRatedMovies = await movieService.getTopRatedMovies();
      const upcomingMovies = await movieService.getUpcomingMovies();

      dispatch(addNowPlayingMovies(nowPlayingMovies.results));
      dispatch(addPopularMovies(popularMovies.results));
      dispatch(addTopRatedMovies(topRatedMovies.results));
      dispatch(addUpcomingMovies(upcomingMovies.results));
    } catch (error) {
      throw error;
    }
  };
};

export default useMovieData;
