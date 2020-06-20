export const FETCH_LEADERBOARD_ITEM_LIST = "GET_LEADERBOARD_ITEM_LIST";
export const FETCH_LEADERBOARD_ITEM = "FETCH_LEADERBOARD_ITEM";
export const UPDATE_LEADERBOARD_ITEM_LIST = 'UPDATE_LEADERBOARD_ITEM_LIST'

export const fetchLeaderboardItemsListAction = () => ({
  type: FETCH_LEADERBOARD_ITEM_LIST,
  payload: {
    url: 'ideas/'
  }
});

export const fetchLeaderboardItemAction = (id) => ({
  type: FETCH_LEADERBOARD_ITEM,
  payload: {
    url: 'ideas/' + id
  }
});

