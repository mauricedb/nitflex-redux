import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import GenreRow from './genre-row';

const GenreList = ({ movies }) => {
  const allGenres = {};

  movies.forEach((movie) => {
    movie.genre.forEach((genre) => {
        if (allGenres[genre]) {
          allGenres[genre].push(movie);
        } else {
          allGenres[genre] = [movie];
        }
      });
  });

  const genres = Object.keys(allGenres).sort();

  return (
    <div>
      {genres.map(genre => <GenreRow
        key={genre}
        genre={genre}
        movies={allGenres[genre]}
      />)}
    </div>
  );
};

GenreList.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const allMovies = state.movies.movies;
  let filteredMovies;

  if (state.movies.searchText) {
    const searchLower = state.movies.searchText.toLowerCase();
    filteredMovies = allMovies.filter(m => m.title.toLowerCase().indexOf(searchLower) !== -1);

    if (!filteredMovies.length) {
      filteredMovies = null;
    }
  }

  return {
    movies: filteredMovies || allMovies
  };
};

export default connect(mapStateToProps)(GenreList);
