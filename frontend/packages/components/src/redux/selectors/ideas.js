export const selectIdeas = (state) => state.idea.ideas;

export const selectIdea = (state, ideaId) =>
  state.idea.ideas.find(({ id } = {}) => id === +ideaId) || {};
