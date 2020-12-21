import axios from "axios";
import { GET_GAME_DETAILS_BY_ID, GET_GAME_SCREENSHOTS_BY_ID } from "../api/Api";

export const fetchGameDetailsById = (id) => async (dispatch) => {
  const gameDetail = await axios.get(GET_GAME_DETAILS_BY_ID(id));
  dispatch({
    type: "FETCH_BY_ID",
    payload: {
      gameDetail: gameDetail.data,
    },
  });
};

export const fetchGameScreenshotsById = (id) => async (dispatch) => {
  const gameDetail = await axios.get(GET_GAME_SCREENSHOTS_BY_ID(id));
  dispatch({
    type: "FETCH_SCREENSHOTS_BY_ID",
    payload: {
      gameScreenshot: gameDetail.data,
    },
  });
};

// export default fetchGameDetailsById;
