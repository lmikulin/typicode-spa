import React from "react";
import {authUser} from "../actions/auth.js";
import {Link} from "react-router";

export default class Login extends React.Component {
  constructor() {
    super();
    this._onAuthUser = this._onAuthUser.bind(this);
  }
  _onAuthUser(event) {
    event.preventDefault();
    this.props.dispatch(authUser(this.refs.username.value));
  }
  render() {
    if (!this.props.auth) {
      return (
        <form onSubmit={this._onAuthUser}>
          <h1>Single Page Application</h1>
          <input type="text" ref="username" placeholder="username" />
          <button type="submit">login</button>
        </form>
      )
    }
    return null;
  }
}
