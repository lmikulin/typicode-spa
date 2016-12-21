import axios from "axios";

export function getPosts(userId) {
  return function(dispatch) {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_POSTS_REJECTED", payload: err});
      });
  };
};

export function addNewPost(userId, title, body) {
  return {
    type: "ADD_NEW_POST",
    payload: {userId, title, body}
  }
}
