import React from "react";
import {getAlbums} from "../actions/albums";
import {Link} from "react-router";

export default class Albums extends React.Component {
  componentWillMount() {
    this.props.dispatch(getAlbums());
  }
  render() {
    return (
      <div>
        {this.props.albums.map((album, index) => {
          return (
            <Link to={`photos/${album.id}`} key={index}>
              <img src={album.thumb || "http://placehold.it/150x150"} />
              <figcaption>
                <label>{album.title}</label><br/>
                by {album.userName || "..."}
              </figcaption>
            </Link>
          )
        })}
      </div>
    )
  }
}
