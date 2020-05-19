import { combineReducers } from "redux";
import leaderboardReducer from "./leaderboardReducer";
import questionReducer from "./questionReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  leaderboardReducer,
  questionReducer,
  gameReducer,
});
