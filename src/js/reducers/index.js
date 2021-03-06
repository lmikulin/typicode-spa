import {combineReducers} from "redux";

import auth from "./auth";
import posts from "./posts";
import comments from "./comments";
import albums from "./albums";
import photos from "./photos";
import {routerReducer} from 'react-router-redux';

export default combineReducers({auth, posts, comments, albums, photos, routing: routerReducer});
