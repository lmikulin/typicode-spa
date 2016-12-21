import React from "react";
import TopNav from "./top-nav";
import {connect} from "react-redux";
import {Link} from "react-router";

@connect((store) => {
  return {
    user: store.auth.user,
    auth: store.auth.auth,
    posts: store.posts.posts,
    comments: store.comments.comments,
    albums: store.albums.albums
  };
})
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <TopNav {...this.props}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
