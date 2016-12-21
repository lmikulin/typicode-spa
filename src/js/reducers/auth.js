import {authInitialState} from '../constants/constants';

export default function reducer(state = authInitialState, action) {
  switch(action.type) {
    case "AUTH_USER_FULFILLED":
      return {...state, auth: true, user: {name: action.payload.name, username: action.payload.username, email: action.payload.email, id: action.payload.id}}
    case "AUTH_USER_REJECTED":
      return {...state, error: action.payload}
  }
  return state;
}
