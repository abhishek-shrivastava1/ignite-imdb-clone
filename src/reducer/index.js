import { combineReducers } from "redux";
import GamesReducer from "./GamesReducer";
import GameDetailsReducer from "./GameDetailsReducer";

const rootReducer = combineReducers({
  games: GamesReducer,
  gameDetail: GameDetailsReducer,
});

export default rootReducer;
