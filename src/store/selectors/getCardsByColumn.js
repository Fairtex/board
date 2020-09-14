const getCardsByColumn = (state, columnId) =>
  state.cards.filter(el => el.columnId === columnId);

export default getCardsByColumn;
