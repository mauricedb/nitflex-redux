import React, { PropTypes } from 'react';
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  const allMovies = state.movies.movies;
  let firstMovies;

  if (state.movies.searchText) {
    const searchLower = state.movies.searchText.toLowerCase();
    firstMovies = allMovies.find(m => m.title.toLowerCase().indexOf(searchLower) !== -1);
  }

  return {
    movie: firstMovies || allMovies[0]
  };
};

export default connect(mapStateToProps)(Billboard);
