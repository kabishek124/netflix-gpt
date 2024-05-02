import apiService from "../../apiService";
import { series } from "../apiRoutes";

const seriesService = {
  getAiringSeries: async () => {
    try {
      const response = await apiService.get(series.AIRING);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getOnTheAirSeries: async () => {
    try {
      const response = await apiService.get(series.ON_THE_AIR);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getPopularSeries: async () => {
    try {
      const response = await apiService.get(series.POPULAR);
      return response;
    } catch (error) {
      throw error;
    }
  },
  getTopRatedSeries: async () => {
    try {
      const response = await apiService.get(series.TOP_RATED);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default seriesService;
