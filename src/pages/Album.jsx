import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from '../component/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../component/MusicCard';
import Loading from '../component/Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class Albuns extends Component {
  state = {
    musics: [],
    artist: '',
    albumName: '',
    loading: false,
    favoriteMusic: [],
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({ loading: true });
    const recebeMusicas = await getMusics(id);
    this.setState({
      musics: recebeMusicas.slice(1),
      artist: recebeMusicas[0].artistName,
      albumName: recebeMusicas[0].collectionName,
      loading: false,
    });
  }

handleChange = async (id) => {
  const { musics } = this.state;
  const musicFind = musics.find((music) => music.trackId === id);
  this.setState((prevState) => (
    { favoriteMusic: [...prevState.favoriteMusic, musicFind],
      loading: true }));
  await addSong(musicFind);
  this.setState({ loading: false });
};

render() {
  const { artist, albumName, musics, loading, favoriteMusic } = this.state;
  return (
    <div data-testid="page-album">
      <Header />
      {
        loading ? <Loading /> : (
          <div>
            <h3 data-testid="artist-name">{artist}</h3>
            <h4 data-testid="album-name">{albumName}</h4>
            {
              musics.map((music) => (
                <MusicCard
                  { ...music }
                  key={ music.trackId }
                  handleChange={ this.handleChange }
                  checked={ favoriteMusic
                    .some((favorite) => favorite.trackId === music.trackId) }
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
}
}

Albuns.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
};
