import {albumsInitialState} from '../constants/constants';

export default function reducer(state = albumsInitialState, action) {
  switch (action.type) {
    case "FETCH_ALBUMS_FULFILLED":
      return {...state, fetching: false, albums: action.payload};
    case "FETCH_ALBUMS_RJECTED":
      return {...state, fetching: false, error: action.payload};
    case "ALBUM_THUMB_FULFILLED":
      const index = state.albums.findIndex((album) => album.id == action.payload.albumId);
      if (index >=0) {
        const album = Object.assign({}, state.albums[index], {thumb: action.payload.thumbnailUrl});
        const albums = [...state.albums.slice(0, index), album, ...state.albums.slice(index +1)];
        return {...state, albums: albums};
      }
      return state;
  }
  return state;
}
