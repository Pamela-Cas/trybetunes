import React, { Component } from 'react';
import Header from '../component/Header';
import Loading from '../component/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Card from '../component/card';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      buttonDisable: true,
      name: '',
      listaAlmbuns: [],
      loading: false,
      response: false,
      artista: '',
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleButton() {
    const { name } = this.state;
    if (name.length >= 2) this.setState({ buttonDisable: false });
  }

  handleName({ target }) {
    const { value } = target;
    this.setState({
      name: value,
    }, () => {
      this.handleButton();
    });
  }

  getApi = async () => {
    const { name } = this.state;
    this.setState({ loading: true, name: '', artista: name });
    const listaAlmbuns = await searchAlbumsAPI(name);
    this.setState({ listaAlmbuns, loading: false, response: true });
  }

  render() {
    const { buttonDisable, name, loading, artista, listaAlmbuns, response } = this.state;
    return (
      <div data-testid="page-search">
        <h3>Search</h3>
        <Header />
        {
          loading ? <Loading /> : (
            <form>
              <input
                onChange={ this.handleName }
                data-testid="search-artist-input"
                type="text"
                placeholder="Nome do artista"
                value={ name }
              />
              <button
                onClick={ this.getApi }
                disabled={ buttonDisable }
                data-testid="search-artist-button"
                type="button"
              >
                Pesquisar
              </button>
            </form>
          )
        }
        { response && (
          <p>
            Resultado de álbuns de:
            {' '}
            {artista}

          </p>)}
        { response && listaAlmbuns.length > 0 ? (
          listaAlmbuns.map((item) => <Card key={ item.collectionId } { ...item } />)
        ) : <p>Nenhum álbum foi encontrado</p> }
      </div>
    );
  }
}
