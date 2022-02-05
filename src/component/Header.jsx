import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    user: '',
    load: false,
  }

  async componentDidMount() {
    this.setState(() => ({
      load: true,
    }));
    const espera = await getUser();
    this.setState(() => ({
      load: false,
      user: espera,
    }));
  }

  render() {
    const { load, user } = this.state;
    return (
      <header data-testid="header-component">
        <Links />
        { load && <Loading /> }
        <p data-testid="header-user-name">{ user.name}</p>
        <nav>
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-search" to="/favorites">Músicas Favoritas</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </nav>
      </header>

    );
  }
}

export default Header;
// helper Bruno