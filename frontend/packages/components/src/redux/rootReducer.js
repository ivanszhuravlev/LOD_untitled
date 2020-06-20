import { combineReducers } from "redux";
import { ideaReducer } from "./reducers/Idea";

export const rootReducer = combineReducers({
  idea: ideaReducer
})