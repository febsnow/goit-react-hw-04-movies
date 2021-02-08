import React, { Component } from "react";
import axios from "axios";
import PreLoader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";

export default class TrandingMovies extends Component {
  state = {
    movies: null,
    error: null,
    loader: false,
  };

  async componentDidMount() {
    this.setState({ loader: true, error: null });
    const movies = await axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=baba47ca8377e85152497efe5912a75b"
      )
      .then(({ data }) => data.results)
      .catch((error) => this.setState({ error: error }));
    this.setState({ movies, loader: false });
  }

  render() {
    const { movies, loader } = this.state;

    return (
      <>
        {loader && <PreLoader />}
        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}
