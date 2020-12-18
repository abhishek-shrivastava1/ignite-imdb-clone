const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const GamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

export default GamesReducer;
