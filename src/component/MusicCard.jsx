import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { previewUrl, trackName, handleChange, trackId, checked } = this.props;
    return (
      <div>
        <span>{ trackName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label htmlFor="favorite">
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name="favorite"
            onChange={ () => handleChange(trackId) }
            checked={ checked }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: propTypes.string.isRequired,
  trackName: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  trackId: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
};
