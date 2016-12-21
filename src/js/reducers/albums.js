import {albumsInitialState} from '../constants/constants';

export default function reducer(state = albumsInitialState, action) {
  switch (action.type) {
    case "FETCH_ALBUMS_FULFILLED":
      return {...state, fetching: false, albums: action.payload};
    case "FETCH_ALBUMS_RJECTED":
      return {...state, fetching: false, error: action.payload};
  }
  return state;
}
