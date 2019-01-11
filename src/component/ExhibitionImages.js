import React, { Component } from 'react';
import './ExhibitionImages.css';

export default class ExhibitionImages extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="ExhibitionImages-model" style={{ width: 100, height: 100 }}></div>
      </div>
    );
  }
}
