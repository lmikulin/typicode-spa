import {commentsInitialState} from '../constants/constants';

export default function reducer(state = commentsInitialState, action) {
  switch (action.type) {
    case "FETCH_COMMENTS_FULFILLED":
      return {...state, comments: Object.assign({}, state.comments, action.payload)}
    case "FETCH_COMMENTS_REJECTED":
      return {...state, error: action.payload}
    case "ADD_NEW_COMMENT":
      const maxComments = state.maxComments + 1;
      const newCommentsForPost = [action.payload, ...state.comments[action.payload.postId]];
      return {...state, maxComments: maxComments, comments: Object.assign({}, state.comments, {[action.payload.postId]: newCommentsForPost})}
  }
  return state;
}
