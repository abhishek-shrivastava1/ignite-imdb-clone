const initState = { game: {}, screenshots: {} };

const GameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_BY_ID":
      return { ...state, game: action.payload.gameDetail };
    case "FETCH_SCREENSHOTS_BY_ID":
      return { ...state, screenshots: action.payload.gameScreenshot };
    default:
      return { ...state };
  }
};

export default GameDetailsReducer;
