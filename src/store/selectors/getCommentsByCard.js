const getCommentsByCard = (state, cardId) =>
  state.comments.filter(el => el.cardId === cardId);

export default getCommentsByCard;
