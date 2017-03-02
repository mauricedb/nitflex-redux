import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from './app-container';

import reducers from './reducers';

//  npm install bootstrap --save
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
