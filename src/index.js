import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './containers/app';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
