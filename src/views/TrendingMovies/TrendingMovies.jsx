import React, { Component } from "react";
import { toast } from "react-toastify";
import PreLoader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../../utils/api";

export default class TrandingMovies extends Component {
  state = {
    movies: null,
    loader: false,
  };

  componentDidMount() {
    this.setState({ loader: true });
    getTrendingMovies()
      .then((data) => this.setState({ movies: data }))
      .catch((error) => toast.error(error))
      .finally(this.setState({ loader: false }));
  }

  render() {
    const { movies, loader } = this.state;

    return (
      <>
        {loader && <PreLoader />}
        {movies && <MoviesList movies={movies} title="Today trending movies" />}
      </>
    );
  }
}
