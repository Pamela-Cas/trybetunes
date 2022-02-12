import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Card(props) {
  const { artworkUrl100, collectionName, artistName, collectionId } = props;
  return (
    <div>
      <img src={ artworkUrl100 } alt="" />
      <p>{ collectionName}</p>
      <p>{ artistName}</p>
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        Saiba mais

      </Link>
    </div>
  );
}

Card.propTypes = {
  artworkUrl100: propTypes.string.isRequired,
  collectionName: propTypes.string.isRequired,
  artistName: propTypes.string.isRequired,
  collectionId: propTypes.number.isRequired,
};
export default Card;
