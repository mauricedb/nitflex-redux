import React, { PropTypes } from 'react';

const Billboard = ({ movie }) => (
  <div className="row">
    <div className="title">
      {movie.title}
    </div>
    <img
      className="img-responsive"
      alt={movie.title}
      src={`http://image.tmdb.org/t/p/w600/${movie.backdrop_path}`}
    />
  </div>
);

Billboard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Billboard;
