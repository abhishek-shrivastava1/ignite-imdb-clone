import axios from "axios";
import { GET_ALL_GAMES, SEARCH_GAMES } from "../api/Api";

import {
  currentISODatePreviousYear,
  currentISODate,
  currentISODateNextYear,
} from "../utils/DateUtils";

// Actions
export const fetchGames = () => async (dispatch) => {
  const currentPopularGames = await axios.get(
    GET_ALL_GAMES(currentISODatePreviousYear, currentISODate, "-rating", 10)
  );
  const currentUpcomingGames = await axios.get(
    GET_ALL_GAMES(currentISODate, currentISODateNextYear, "-added", 10)
  );

  const currentNewGames = await axios.get(
    GET_ALL_GAMES(currentISODatePreviousYear, currentISODate, "-released", 10)
  );

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: currentPopularGames.data.results,
      newGames: currentNewGames.data.results,
      upcomingGames: currentUpcomingGames.data.results,
    },
  });
};

export const searchGames = (gameName) => async (dispatch) => {
  const searchedGames = await axios.get(SEARCH_GAMES(gameName));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};

export const clearGames = () => (dispatch) => {
  dispatch({
    type: "CLEAR_SEARCHED",
  });
};
