import axios from "axios";

export function authUser(username) {
  return function(dispatch) {
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
      .then((response) => {
        if (response.data.length) {
          dispatch({type: "AUTH_USER_FULFILLED", payload: response.data[0]});
        } else {
          dispatch({type: "AUTH_USER_REJECTED", payload: "Could not authenticate this user"});
        }
      })
      .catch((err) => {
        dispatch({type: "AUTH_USER_REJECTED", payload: err});
      });
  };
};
