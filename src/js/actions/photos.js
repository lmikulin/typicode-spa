import axios from "axios";

export function getPhotos(albumId) {
  return function(dispatch) {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        dispatch({type: "FETCH_PHOTOS_FULFILLED", payload: response.data});
      })
      .then(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
          .then((response) => {
            dispatch({type: "PHOTOS_ALBUM_FULFILLED", payload: response.data})
            axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`)
              .then((userResp) => {
                dispatch({type: "PHOTOS_USER_FULFILLED", payload: userResp.data});
              });
          });
      });
  }
}
