import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './helper/history.helper';
import Routing from './pages/routing.component';
import { store, configureStore } from './store';

configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routing />
      </Router>
    </Provider>
  )
}

export default App;
