import { UPDATE_IDEAS_LIST } from "../actions/idea";
import { UPDATE_LEADERBOARD_ITEM_LIST } from "../actions/leaderboardItems";

const initialState = {
  leaderboardItems: [],
};

export const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LEADERBOARD_ITEM_LIST:
      const leaderboardItems = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      console.log(action.payload)
      return { ...state, leaderboardItems };
    default:
      return state;
  }
};
