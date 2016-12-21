import {commentsInitialState} from '../constants/constants.js';

export default function reducer(state = commentsInitialState, action) {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {...state, fetching: true};
    case "FETCH_COMMENTS_FULFILLED":
      return {...state, fetching: false, fetched: true, comments: Object.assign({}, state.comments, action.payload)}
    case "FETCH_COMMENTS_REJECTED":
      return {...state, fetching: false, fetched: true, error: action.payload}
    case "ADD_NEW_COMMENT":
      const maxComments = state.maxComments + 1;
      const newCommentsForPost = [action.payload, ...state.comments[action.payload.postId]];
      return {...state, maxComments: maxComments, comments: Object.assign({}, state.comments, {[action.payload.postId]: newCommentsForPost})}
  }
  return state;
}
