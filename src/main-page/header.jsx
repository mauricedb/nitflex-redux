import React, { PropTypes } from 'react';
import FilterMovies from './filter-movies';

const Header = ({ user }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          Nitflex Movies
        </a>
      </div>

      <div className="navbar-right">
        <p className="navbar-text">
          {user.name}
        </p>
      </div>
      <FilterMovies />
    </div>
  </nav>
);

Header.propTypes = {
  user: PropTypes.shape({ name: React.PropTypes.string }).isRequired,
};

export default Header;
