import { RENAME_COLUMN } from '../actionTypes';

export const renameColumn = (id, name) => ({
  type: RENAME_COLUMN,
  payload: { id, name },
});
