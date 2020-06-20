import { combineReducers } from "redux";
import { ideaReducer } from "./reducers/idea";
import { leaderboardReducer } from "./reducers/leaderboard";

export const rootReducer = combineReducers({
  idea: ideaReducer,
  leaderboard: leaderboardReducer
})