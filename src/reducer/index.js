import { combineReducers } from "redux";
import GamesReducer from "./GamesReducer";

const rootReducer = combineReducers({
  games: GamesReducer,
});

export default rootReducer;
