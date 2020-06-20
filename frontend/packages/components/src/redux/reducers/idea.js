import { UPDATE_IDEAS_LIST } from "../actions/idea";

const initialState = {
  ideas: [],
};

export const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IDEAS_LIST:
      const ideas = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      return { ...state, ideas };
    default:
      return state;
  }
};
