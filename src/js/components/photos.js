import React from 'react';
import {getPhotos} from "../actions/photos";
import {Link} from "react-router";

export default class Photos extends React.Component {
  componentWillMount() {
    this.props.dispatch(getPhotos(this.props.params.albumId));
  }
  render() {
    return (
      <div>
        <h3>{this.props.photosAlbum}</h3>
        <p>{this.props.photosUser}</p>
        {this.props.photos.map((photo, index) => {
          return (
            <Link to={`detail/${index}`} key={index}>
              <img src={photo.thumbnailUrl}/>
              <figcaption>
                <label>{photo.title}</label>
              </figcaption>
            </Link>
          )
        })}
      </div>
    )
  }
}
