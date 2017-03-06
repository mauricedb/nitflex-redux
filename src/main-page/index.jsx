import React, { PropTypes } from 'react';
import Header from './header';
import Billboard from './billboard';
import GenreList from './genre-list';

const MainPage = ({ user }) => (
  <div>
    <Header user={user} />
    <Billboard />
    <GenreList />
  </div>
);

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MainPage;
