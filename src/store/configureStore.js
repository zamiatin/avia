import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const logger = createLogger();
  const middlewares = [thunk, logger];
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
