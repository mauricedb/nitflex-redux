import React, { PropTypes } from 'react';
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

export default GenreList;
