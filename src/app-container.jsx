import React, { Component } from "react";
import AppPresentation from "./app-presentation";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredMovies: null
    };
    this.filterMovies = this.filterMovies.bind(this);
  }

  componentWillMount() {
    if (localStorage.user) {
      try {
        const user = JSON.parse(localStorage.user);
        this.setState({ user });
        this.fetchMovies();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  fetchMovies() {
    fetch("/movies.json")
      .then(rsp => rsp.json())
      .then(movies => this.setState({ allMovies: movies }));
  }

  filterMovies(search) {
    let filteredMovies = null;

    if (search) {
      const searchLower = search.toLowerCase();
      const { allMovies } = this.state;
      filteredMovies = allMovies.filter(
        m => m.title.toLowerCase().indexOf(searchLower) !== -1
      );

      if (!filteredMovies.length) {
        filteredMovies = null;
      }
    }

    this.setState({ filteredMovies });
  }

  render() {
    return (
      <AppPresentation
        filterMovies={this.filterMovies}
      />
    );
  }
}

export default AppContainer;
