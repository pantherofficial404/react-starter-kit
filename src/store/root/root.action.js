import { createAction } from 'redux-actions';

const ACTION_PREFIX = '@root';

export const getActionName = (prefix, name) => {
  return `${prefix}/${name}`;
}
export const getDataAction = (prefix, name) => {
  return {
    reset: createAction(getActionName(prefix, `${name}_RESET`)),
    init: createAction(getActionName(prefix, `${name}_INIT`)),
    failed: createAction(getActionName(prefix, `${name}_FAILED`)),
    success: createAction(getActionName(prefix, `${name}_SUCCESS`)),
  }
}
export const accountsAction = getDataAction(ACTION_PREFIX, 'ACCOUNTS');
