import React, { Component, PropTypes } from 'react';

class ExpandedGenreRowMovie extends Component {
  constructor(props) {
    super(props);
    this.startPlaying = this.startPlaying.bind(this);
  }

  startPlaying() {
    const { movie, startPlaying } = this.props;
    startPlaying(movie);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="col-sm-12" style={{paddingLeft: 0}} >
        <div className="col-sm-4" style={{paddingLeft: 0}} >
          <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="col-sm-8">
          <h4 className="media-heading">{movie.title}</h4>
          <div>
            <span>
              {movie.vote_average}
              <span>&nbsp;</span>
              {movie.release_date.slice(0, 4)}
            </span>
          </div>
          <p>{movie.overview}</p>
          <div>
            <span>Genres:&nbsp;</span>
            <span>{movie.genre.join(', ')}</span>
          </div>
          <button className="btn btn-default btn-lg" onClick={this.startPlaying}>
            <i className="glyphicon glyphicon-play-circle" />
          </button>
        </div>
      </div>
    );
  }
}

ExpandedGenreRowMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  startPlaying: PropTypes.func.isRequired,
};

export default ExpandedGenreRowMovie;
