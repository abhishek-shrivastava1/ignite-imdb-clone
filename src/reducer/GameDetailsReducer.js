const initState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true,
};

const GameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_BY_ID":
      return {
        ...state,
        game: action.payload.gameDetail,
        screenshots: action.payload.gameScreenshot,
        isLoading: false,
      };
    case "LOADING_DATA":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default GameDetailsReducer;
