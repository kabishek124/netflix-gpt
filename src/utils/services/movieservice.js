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
};

export default movieService;
