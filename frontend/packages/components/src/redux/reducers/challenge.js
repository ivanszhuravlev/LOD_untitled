import { UPDATE_CHALLENGES_LIST } from "../actions/challenge";

const initialState = {
  challenges: [],
};

export const challengeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHALLENGES_LIST:
      console.log("payload", action.payload);
      const challenges = action.payload.results
        ? action.payload.results
        : [action.payload];
      return { ...state, challenges };
    default:
      return state;
  }
};
