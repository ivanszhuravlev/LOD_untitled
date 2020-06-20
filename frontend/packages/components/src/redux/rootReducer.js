import { combineReducers } from "redux";
import { ideaReducer } from "./reducers/idea";

export const rootReducer = combineReducers({
  idea: ideaReducer
})