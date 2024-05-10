import apiService from "../../apiService";
import { movies } from "../apiRoutes";

const movieService = {
  getNowPlayingMovies: async () => {
    try {
      const response = await apiService.get(movies.NOWPLAYING);
      //console.log("In movie service" + " "  + response)
      return response;
    } catch (error) {
      throw error;
    }
  },
  getPopularMovies: async () => {
    try {
      const response = await apiService.get(movies.POPULAR);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getTopRatedMovies: async () => {
    try {
      const response = await apiService.get(movies.TOPRATED);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getUpcomingMovies: async () => {
    try {
      const response = await apiService.get(movies.UPCOMING);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getOneMovieTrailer: async (id) => {
    try {
      const url = movies?.VIDEOS ? movies.VIDEOS.replace(":id", id) : "";
      const response = await apiService.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default movieService;
