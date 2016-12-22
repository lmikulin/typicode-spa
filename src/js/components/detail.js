import React from 'react';

export default class Detail extends React.Component {
  render() {
    const photo = this.props.photos[this.props.params.photoIndex];
    return (
      <div>
        <h3>{this.props.photosAlbum}</h3>
        <h3>{photo.title}</h3>
        <p>{this.props.photosUser}</p>
        <img src={photo.url}/>
      </div>
    )
  }
}
