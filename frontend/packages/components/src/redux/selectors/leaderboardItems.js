export const selectLeaderboardItems = (state) => state.leaderboard.leaderboardItems;

export const selectLeaderboard = (state, leaderboardItemId) =>
  state.leaderboard.leaderboardItems.find(({ id } = {}) => id === +leaderboardItemId) || {};
