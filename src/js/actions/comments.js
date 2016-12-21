import axios from "axios";

export function getComments(postId) {
  return function(dispatch) {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        dispatch({type: "FETCH_COMMENTS_FULFILLED", payload: {[postId]: response.data}});
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMMENTS_REJECTED", payload: err});
      });
  };
};

export function addNewComment(postId, name, email, body) {
  return {
    type: "ADD_NEW_COMMENT",
    payload: {postId, name, email, body}
  }
}
