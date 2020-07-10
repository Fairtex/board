import { RENAME_COLUMN } from '../actionTypes';

export const renameColumn = (id, name) => ({ type: RENAME_COLUMN, id, name})