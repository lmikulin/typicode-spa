import axios from "axios";

export function getAlbums() {
  return function(dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        dispatch({type: "FETCH_ALBUMS_FULFILLED", payload: response.data});
        response.data.forEach((album, index) => {
          axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
            .then((photoResp) => {
              if (photoResp.data && photoResp.data.length) {
                dispatch({type: "ALBUM_THUMB_FULFILLED", payload: photoResp.data[0]});
              }
            });
            // dont throw an error here, no thumb then just show placeholder
        });
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then((usersResp) => {
            let index = 0;
            const users = usersResp.data;
            // response.data.forEach((album, index) => {
            //   while (index < users.length) {
            //    if (album.userId == users[index]) {
            //      dispatch({type: "USER_NAME_FULFILLED", payload:})
            //    }
            //   }
            // })
          });
      })
      .catch((err) => {
        dispatch({type: "FETCH_ALBUMS_RJECTED", payload: err});
      })
  }
}
