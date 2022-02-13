import React, { Component } from 'react';
import { string } from 'prop-types';
import Header from '../component/Header';
import getMusics from '../services/musicsAPI';

export default class Albuns extends Component {
  state = {
    musics: [],
  }

  async componentDidMount() {
    const albumId = this.props.match.params.id;
    const recebeMusicas = await getMusics(albumId);
    this.setState({ musics: recebeMusicas });
  }
// criar map. para as músicas item 7. 
  render() {
    const { imageUrl, artistName, albumName } = this.props;
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <img src={ imageUrl } alt="album" />
        <h3>{artistName}</h3>
        {console.log(musics)}
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
