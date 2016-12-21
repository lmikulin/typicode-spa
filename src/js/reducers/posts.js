import {postsInitialState} from '../constants/constants';

export default function reducer(state = postsInitialState, action) {
  switch (action.type) {
    case "FETCH_POSTS_FULFILLED":
      return {...state, posts: action.payload}
    case "FETCH_POSTS_REJECTED":
      return {...state, error: action.payload}
    case "ADD_NEW_POST":
      const maxPostId = state.maxPostId + 1;
      return {...state, maxPostId: maxPostId, posts: [Object.assign(action.payload, {id: maxPostId}), ...state.posts]}
  }
  return state;
}
