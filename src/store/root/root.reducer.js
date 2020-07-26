import ReducerFactory from '../ReducerFactory';
import { accountsAction } from './root.action';
import { getRootState } from '../../helper/window-storage.helper';
export const initState = {
  accounts: {
    initialized: false,
    loading: true,
    error: null,
    data: null,
  },
};

const initAnalyticsState = getRootState(initState);

export const dataFields = [
  'accounts'
];
dataFields.forEach(key => {
  const item = initAnalyticsState[key];
  if (item.loading || !item.initialized || item.error || !item.data) {
    item.initialized = false;
    item.loading = true;
    item.error = null;
    item.data = null;
  }
});

export const addDataActions = (actions, key) => {
  return (reducerFactory) => {
    reducerFactory.add(actions.reset, (state) => {
      return {
        ...state,
        [key]: {
          initialized: false,
          loading: true,
          error: null,
          data: null,
        }
      }
    });
    reducerFactory.add(actions.init, (state) => {
      return {
        ...state,
        [key]: {
          initialized: true,
          loading: true,
          error: null,
          data: null,
        }
      }
    });
    reducerFactory.add(actions.failed, (state, action) => {
      return {
        ...state,
        [key]: {
          initialized: true,
          loading: false,
          error: action.payload,
          data: null,
        }
      }
    })
    reducerFactory.add(actions.success, (state, action) => {
      return {
        ...state,
        [key]: {
          initialized: true,
          loading: false,
          error: null,
          data: action.payload,
        }
      }
    })
  }
}

const reducer = new ReducerFactory(initAnalyticsState)
  .addCustom(addDataActions(accountsAction, 'accounts'))
  .toReducer();

export default reducer;
