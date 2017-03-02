import React, { PropTypes } from "react";
import { connect } from "react-redux";
import LoginPage from "./login-page";
import PlayingMovie from "./playing-movie";
import MainPage from "./main-page";
import AjaxLoading from "./utils/ajax-loading";

const AppPresentation = ({ user, movies, playing }) => {
  let component = null;

  if (!user) {
    component = <LoginPage />;
  } else if (!movies) {
    component = <AjaxLoading />;
  } else if (playing) {
    component = <PlayingMovie />;
  } else {
    component = (
      <MainPage
        user={user}
        movies={movies}
      />
    );
  }

  return (
    <div className="container">
      {component}
    </div>
  );
};

AppPresentation.propTypes = {
  user: PropTypes.object,
  movies: PropTypes.array,
  playing: PropTypes.object,
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
    user: state.user,
    playing: state.movies.playing,
    movies: filteredMovies || allMovies,
  };
};

export default connect(mapStateToProps)(AppPresentation);
