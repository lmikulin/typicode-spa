import {photosInitialState} from '../constants/constants';

export default function reducer(state = photosInitialState, action) {
  switch (action.type) {
    case "FETCH_PHOTOS_FULFILLED":
      return {...state, photos: action.payload};
    case "PHOTOS_ALBUM_FULFILLED":
      return {...state, album: action.payload.title}
    case "PHOTOS_USER_FULFILLED":
      return {...state, user: action.payload.name}
  }
  return state;
}
