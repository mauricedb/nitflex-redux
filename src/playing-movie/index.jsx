import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { stopPlayingMovie } from '../actions';
import './playing-movie.css';

const PlayingMovie = ({ movie, stopPlaying }) => (
  <div className="row">
    <div className="title">
      <h1>{movie.title}
        <button className="btn btn-link pull-right" onClick={stopPlaying}>
          <i className="glyphicon glyphicon-remove" />
        </button>
      </h1>

      <iframe
        src="https://www.youtube.com/embed/6hB3S9bIaco?autoplay=1"
        frameBorder="0"
        allowFullScreen
        className="video"
      />
    </div>
  </div>
);

PlayingMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  stopPlaying: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movies.playing
});

const mapDispatchToProps = dispatch => ({
  stopPlaying: movie => dispatch(stopPlayingMovie(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayingMovie);
