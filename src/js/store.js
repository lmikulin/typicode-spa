import {applyMiddleware, createStore} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import reducer from "./reducers";
import {authInitialState, postsInitialState, commentsInitialState, albumsInitialState, photosInitialState} from "./constants/constants.js";

const defaultState = {
  auth: authInitialState,
  posts: postsInitialState,
  comments: commentsInitialState,
  albums: albumsInitialState,
  photos: photosInitialState
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, defaultState, middleware);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
