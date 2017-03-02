import React, { PropTypes } from 'react';
import LoginPage from './login-page';
import PlayingMovie from './playing-movie';
import MainPage from './main-page';
import AjaxLoading from './utils/ajax-loading';

const AppPresentation = ({ user, movies, playing, loginAsUser, startPlaying, stopPlaying, filterMovies }) => {
  let component = null;

  if (!user) {
    component = <LoginPage loginAsUser={loginAsUser} />;
  } else if (!movies) {
    component = <AjaxLoading />;
  } else if (playing) {
    component = <PlayingMovie movie={playing} stopPlaying={stopPlaying} />;
  } else {
    component = <MainPage user={user} movies={movies} startPlaying={startPlaying} filterMovies={filterMovies} />;
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
  loginAsUser: PropTypes.func.isRequired,
  startPlaying: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
};

export default AppPresentation;
