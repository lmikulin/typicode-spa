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
    case "USERS_LIST_FULFILLED":
      let users = {};
      let albums = [];
      let foundUser;
      state.albums.forEach((album) => {
        let newAlbum;
        if (users[album.userId]) {
          newAlbum = {...album, userName: users[album.userId].name};
        } else {
          foundUser = action.payload.find((user) => user.id == album.userId);
          if (foundUser) {
            // add it to the users hash for quick reference on the next iteration
            users[foundUser.id] = foundUser;
            // create our new album entry
            newAlbum = {...album, userName: foundUser.name};
          }
        }
        albums.push(newAlbum || album);
      });
      return {...state, albums: albums};
  }
  return state;
}
