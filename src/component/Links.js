import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Links extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/album:id">Album</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/profile/edit">ProfileEdit</Link>
        <Link to="/search">Search</Link>
      </div>
    );
  }
}
export default Links;
