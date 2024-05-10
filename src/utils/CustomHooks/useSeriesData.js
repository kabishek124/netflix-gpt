import { useDispatch } from "react-redux";
import seriesService from "../Services/seriesService";
import {
  addAiringSeries,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
} from "../Stores/seriesSlice";
import { useEffect } from "react";

const useSeriesData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSeriesData();
  }, []);

  const fetchSeriesData = async () => {
    try {
      const popularSeries = await seriesService.getPopularSeries();
      const airingSeries = await seriesService.getAiringSeries();
      const onTheAirSeries = await seriesService.getOnTheAirSeries();
      const topRatedSeries = await seriesService.getTopRatedSeries();

      dispatch(addAiringSeries(airingSeries.results));
      dispatch(addTopRatedSeries(topRatedSeries.results));
      dispatch(addOnTheAirSeries(onTheAirSeries.results));
      dispatch(addPopularSeries(popularSeries.results));
    } catch (error) {
      throw error;
    }
  };
};

export default useSeriesData;
