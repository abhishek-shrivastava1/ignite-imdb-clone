import axios from "axios";
import { GET_POPULAR_GAMES } from "../Api";

import { currentISODatePreviousYear, currentISODate } from "../utils/DateUtils";

// Actions
export const fetchCurrentPopularGames = () => async (dispatch) => {
  const currentPopularGames = await axios.get(
    GET_POPULAR_GAMES(currentISODatePreviousYear, currentISODate, "+rating", 20)
  );

  dispatch({
    type: "FETCH_GAMES",
    payload: { popular: currentPopularGames.data.results },
  });
};
