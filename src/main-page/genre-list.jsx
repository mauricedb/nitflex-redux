import React, { PropTypes } from 'react';
import GenreRow from './genre-row';

const GenreList = ({ movies, startPlaying }) => {
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
        startPlaying={startPlaying}
      />)}
    </div>
  );
};

GenreList.propTypes = {
  movies: PropTypes.array.isRequired,
  startPlaying: PropTypes.func.isRequired,
};

export default GenreList;
