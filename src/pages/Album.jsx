import React, { Component } from 'react';
import { string } from 'prop-types';
import Header from '../component/Header';

export default class Albuns extends Component {
  render() {
    const { imageUrl, artistName, albumName } = this.props;
    return (
      <div data-testid="page-album">
        <Header />
        <img src={ imageUrl } alt="album" />
        <h3>{artistName}</h3>
        <h4>{albumName}</h4>
      </div>
    );
  }
}

Albuns.propTypes = {
  imageUrl: string.isRequired,
  artistName: string.isRequired,
  albumName: string.isRequired,
};
