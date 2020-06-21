import { combineReducers } from "redux";
import { ideaReducer } from "./reducers/idea";
import { challengeReducer } from "./reducers/challenge";
import { leaderboardReducer } from "./reducers/leaderboard";

export const rootReducer = combineReducers({
  idea: ideaReducer,
  challenge: challengeReducer,
  leaderboard: leaderboardReducer
})