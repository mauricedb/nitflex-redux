import React, { PropTypes } from 'react';
import Header from './header';
import Billboard from './billboard';
import GenreList from './genre-list';

const MainPage = ({ user, movies }) => (
  <div>
    <Header user={user} />
    <Billboard movie={movies[0]}/>
    <GenreList movies={movies} />
  </div>
);

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default MainPage;
