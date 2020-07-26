import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggerMiddleware } from './logger';
import rootReducer from './root/root.reducer';

const appReducer = combineReducers({
  root: rootReducer,
});

export let store;

export const configureStore = () => {
  const middleware = process.env.NODE_ENV !== 'production' ? composeWithDevTools(applyMiddleware(...loggerMiddleware)) : undefined;
  store = createStore(
    appReducer,
    middleware,
  );
};

export default store;