import axios from "axios";
import { GET_GAME_DETAILS_BY_ID, GET_GAME_SCREENSHOTS_BY_ID } from "../api/Api";

export const fetchGameDetailsById = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DATA",
  });
  const gameDetail = await axios.get(GET_GAME_DETAILS_BY_ID(id));
  const screenshotDetail = await axios.get(GET_GAME_SCREENSHOTS_BY_ID(id));
  dispatch({
    type: "FETCH_BY_ID",
    payload: {
      gameDetail: gameDetail.data,
      gameScreenshot: screenshotDetail.data,
    },
  });
};
