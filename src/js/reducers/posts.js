import {postsInitialState} from '../constants/constants';

export default function reducer(state = postsInitialState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return {...state, fetching: true};
    case "FETCH_POSTS_FULFILLED":
      return {...state, fetching: false, fetched: true, posts: action.payload}
    case "FETCH_POSTS_REJECTED":
      return {...state, fetching: false, fetched: true, error: action.payload}
    case "ADD_NEW_POST":
      const maxPostId = state.maxPostId + 1;
      return {...state, maxPostId: maxPostId, posts: [Object.assign(action.payload, {id: maxPostId}), ...state.posts]}
  }
  return state;
}
