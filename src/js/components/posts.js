import React from "react";
import {getPosts, addNewPost} from "../actions/posts";
import Comments from "./comments";

export default class Posts extends React.Component {
  constructor() {
    super();
    this._onToggleNewPost = this._onToggleNewPost.bind(this);
    this._onSubmitPost = this._onSubmitPost.bind(this);
    this.state = {
      expanded: false
    }
  }
  componentWillMount() {
    this.props.dispatch(getPosts(this.props.user.id));
  }
  _onToggleNewPost(event) {
    event.preventDefault();
    this.setState({expanded: !this.state.expanded});
  }
  _onSubmitPost(event) {
    event.preventDefault();
    this.props.dispatch(addNewPost(this.props.user.userId, this.refs.title.value, this.refs.body.value));
    this.refs.newpost.reset();
  }
  getAddNewPost() {
    if (this.state.expanded) {
      return (
        <form ref="newpost" onSubmit={this._onSubmitPost}>
          <input type="text" ref="title" placeholder="title"/>
          <textarea ref="body" placeholder="...add a new post"></textarea>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }
  render() {
    return (
      <div>
        <button onClick={this._onToggleNewPost}>+/- New Post</button>
        {this.getAddNewPost()}
        {this.props.posts.map((post, index) => {
          return (
            <div key={index}>
              <p><label>{post.title}</label><br/>{post.body}</p>
              <Comments postId={post.id} {...this.props}/>
            </div>
          )
        })}
      </div>
    )
  }
}
