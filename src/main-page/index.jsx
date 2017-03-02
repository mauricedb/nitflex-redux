import React, { PropTypes } from 'react';
import Header from './header';
import Billboard from './billboard';
import GenreList from './genre-list';

const MainPage = ({ user, movies, startPlaying, filterMovies }) => (
  <div>
    <Header user={user} filterMovies={filterMovies} />
    <Billboard movie={movies[0]}/>
    <GenreList movies={movies} />
  </div>
);

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  filterMovies: PropTypes.func.isRequired,
};

export default MainPage;
