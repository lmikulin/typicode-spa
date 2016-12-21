import React from "react";
import {getComments, addNewComment} from "../actions/comments";

export default class Comments extends React.Component {
  constructor() {
    super();
    this._onShowComments = this._onShowComments.bind(this);
    this._onHideComments = this._onHideComments.bind(this);
    this._onSubmitComment = this._onSubmitComment.bind(this);
    this._onToggleAddNew = this._onToggleAddNew.bind(this);
    this.state = {
      expanded: false,
      addNew: false
    }
  }
  _onShowComments(event) {
    event.preventDefault();
    this.setState({expanded: true});
    if (!this.props.comments[this.props.postId]) {
      this.props.dispatch(getComments(this.props.postId));
    }
  }
  _onHideComments(event) {
    event.preventDefault();
    this.setState({expanded: false});
  }
  _onSubmitComment(event) {
    event.preventDefault();
    this.props.dispatch(addNewComment(this.props.postId, this.props.user.name, this.props.user.email, this.refs.body.value));
    this.refs.newcomment.reset();
  }
  _onToggleAddNew(event) {
    event.preventDefault();
    this.setState({addNew: !this.state.addNew});
  }
  getAddNewComment() {
    if (this.state.addNew) {
      return (
        <form ref="newcomment" onSubmit={this._onSubmitComment}>
          <textarea ref="body" placeholder="...add a new comment"></textarea>
          <button type="submit">Submit</button>
        </form>
      )
    }
  }
  render() {
    if (this.state.expanded) {
      const comments = this.props.comments[this.props.postId] || [];
      const length = comments.length;
      return (
        <div>
          <button onClick={this._onHideComments}>Close Comments</button><br/>
          <button onClick={this._onToggleAddNew}>+/- New Comment</button>

          {this.getAddNewComment()}
          {comments.map((comment, index) => {
              return (
                <p key={index}>
                  <em>Comment {index + 1} of {length}</em><br/>
                  by <b>{comment.name}</b> (<b>{comment.email}</b>)<br/>
                  {comment.body}
                </p>
              )
            })}
        </div>
      )
    } else {
      return <button onClick={this._onShowComments}>View Comments</button>
    }
    return (
      <div>
        {this.props.comments.map((post, index) => <p key={index}><label>{post.title}</label><br/>{post.body}</p>)}
      </div>
    )
  }
}
