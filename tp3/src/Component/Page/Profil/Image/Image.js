import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Photo.css';




class Photo extends Component {
  render() {
    const photo = this.props.photo;
    // PAREIL QUE
    // const { author } = this.props;

    return (
      <div>
        <h4>{photo.src}</h4>
        <p>{photo.alt}</p>
      </div>
    );
  }
}

export default Photo;