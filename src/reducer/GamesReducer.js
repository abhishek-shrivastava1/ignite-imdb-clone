const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const GamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcomingGames,
      };
    case "FETCH_SEARCHED":
      return { ...state, searched: action.payload.searched };
    case "CLEAR_SEARCHED":
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};

export default GamesReducer;
