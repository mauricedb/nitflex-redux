import React, { Component, PropTypes } from 'react';
import GenreRowMovie from './genre-row-movie';
import ExpandedGenreRowMovie from './expanded-genre-row-movie';
import './genre-row.css';

class GenreRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedMovie: null,
    };

    this.expandMovie = this.expandMovie.bind(this);
  }

  expandMovie(movie) {
    this.setState({ expandedMovie: movie });
  }

  render() {
    const { genre, movies, startPlaying } = this.props;
    const { expandedMovie } = this.state;

    return (
      <div className="row genre-row">
        <h2>{genre}</h2>

        {movies.slice(0, 6).map(movie => (
            <GenreRowMovie
              key={movie.id}
              movie={movie}
              expandMovie={this.expandMovie}
            />))}

        {expandedMovie
          ? <ExpandedGenreRowMovie movie={expandedMovie} startPlaying={startPlaying} />
          : <div />}
      </div>
    );
  }
}

GenreRow.propTypes = {
  genre: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  startPlaying: PropTypes.func.isRequired,
};

export default GenreRow;
