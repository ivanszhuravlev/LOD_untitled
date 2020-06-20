export const FETCH_IDEAS_LIST = "GET_IDEAS_LIST";
export const FETCH_IDEA = "FETCH_IDEA";
export const UPDATE_IDEAS_LIST = 'UPDATE_IDEAS_LIST'

export const fetchIdeasListAction = () => ({
  type: FETCH_IDEAS_LIST,
  payload: {
    url: 'ideas/'
  }
});

export const fetchIdeaAction = (id) => ({
  type: FETCH_IDEA,
  payload: {
    url: 'ideas/' + id
  }
});

