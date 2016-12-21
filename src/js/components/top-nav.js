import React from "react";
import {Link} from "react-router";

export default class TopNav extends React.Component {
  render() {
    if (this.props.auth) {
      return (
        <div>
          <Link to="/"><button>Home</button></Link>
          <Link to="posts"><button>Posts</button></Link>
          <Link to="albums"><button>Albums</button></Link>
          <span className="text-right">Welcome {this.props.user.username}: {this.props.user.name}</span>
        </div>
      )
    }
    return null;
  }
}
