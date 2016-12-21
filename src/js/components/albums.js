import React from "react";
import {getAlbums} from "../actions/albums";

export default class Albums extends React.Component {
  componentWillMount() {
    this.props.dispatch(getAlbums());
  }
  render() {
    return (
      <div>
        {this.props.albums.map((album, index) => {
          return (
            <div key={index}>
              <img src={album.thumb || "http://placehold.it/150x150"} />
              <figcaption>
                <label>{album.title}</label><br/>
                by {album.user || "..."}
              </figcaption>
            </div>
          )
        })}
      </div>
    )
  }
}
