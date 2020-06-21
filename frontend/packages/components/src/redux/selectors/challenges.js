export const selectChallenges = (state) => state.challenge.challenges;

export const selectChallenge = (state, challengeId) =>
  state.challenge.challenges.find(({ id } = {}) => id === +challengeId) || {};
