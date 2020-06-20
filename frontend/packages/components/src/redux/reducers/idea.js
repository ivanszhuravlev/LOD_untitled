import { UPDATE_IDEAS_LIST } from "../actions/idea";

const initialState = {
  ideas: [],
};

export const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IDEAS_LIST:
      console.log("payload", action.payload);
      const ideas = action.payload.results
        ? action.payload.results
        : [action.payload];
      return { ...state, ideas };
    default:
      return state;
  }
};
