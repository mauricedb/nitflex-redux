import React, { PropTypes } from "react";
import { connect } from "react-redux";
import LoginPage from "./login-page";
import PlayingMovie from "./playing-movie";
import MainPage from "./main-page";
import AjaxLoading from "./utils/ajax-loading";

const AppPresentation = (
  { user, movies, playing, filterMovies }
) => {
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
        filterMovies={filterMovies}
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
  filterMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => Object.assign({}, props, {
  user: state.user,
  movies: state.movies.movies,
  playing: state.movies.playing
});

export default connect(mapStateToProps)(AppPresentation);
