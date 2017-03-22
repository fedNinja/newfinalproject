import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore,  applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import axios from 'axios';
import reducer from './reducers';
import routes from './routes';

{/*const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);*/}
const middleware = applyMiddleware(promise(), thunk, logger());

axios.defaults.baseURL = 'http://localhost:8080';
const store = createStore(
  reducer,middleware
);

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('root')
)
