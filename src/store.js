import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import authenticated from './reducers/authenticated';
import books from './reducers/reducer_books';
import activebook from './reducers/reducer_activebook';

const reducers = {
    authenticated,
    activebook,
    books
  };

const store = createStore(
  combineReducers({ ...reducers,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
