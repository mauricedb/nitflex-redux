import React, { PropTypes } from "react";
import { connect } from "react-redux";
import LoginPage from "./login-page";
import PlayingMovie from "./playing-movie";
import MainPage from "./main-page";
import AjaxLoading from "./utils/ajax-loading";

const AppPresentation = ({ user, hasMovies, playing }) => {
  let component = null;

  if (!user) {
    component = <LoginPage />;
  } else if (!hasMovies) {
    component = <AjaxLoading />;
  } else if (playing) {
    component = <PlayingMovie />;
  } else {
    component = (
      <MainPage
        user={user}
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
  hasMovies: PropTypes.bool,
  playing: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    user: state.user,
    playing: state.movies.playing,
    hasMovies: !!state.movies.movies
  };
};

export default connect(mapStateToProps)(AppPresentation);
