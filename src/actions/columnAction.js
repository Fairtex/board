import { RENAME_COLUMN } from '../actionTypes';

export function renameColumn(name) {
  return { type: RENAME_COLUMN, name}
}