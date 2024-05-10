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
      const response = await apiService.get(series.ONTV);
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
      const response = await apiService.get(series.TOPRATED);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default seriesService;
