const getCommentsNumber = (state, cardId) =>
  state.comments.filter(el => el.cardId === cardId).length;

export default getCommentsNumber;
