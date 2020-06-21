export const FETCH_CHALLENGES_LIST = "GET_CHALLENGES_LIST";
export const FETCH_CHALLENGE = "FETCH_CHALLENGE";
export const UPDATE_CHALLENGES_LIST = 'UPDATE_CHALLENGES_LIST'

export const fetchChallengesListAction = () => ({
  type: FETCH_CHALLENGES_LIST,
  payload: {
    url: 'challenges/'
  }
});

export const fetchChallengeAction = (id) => ({
  type: FETCH_CHALLENGE,
  payload: {
    url: 'challenges/' + id
  }
});

