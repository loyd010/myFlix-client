import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape ({
      Name: PropTypes.string,
      Description: PropTypes.string
    }),
    Director: PropTypes.shape ({
      Name: PropTypes.string,
      Bio: PropTypes.string
    }),
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};