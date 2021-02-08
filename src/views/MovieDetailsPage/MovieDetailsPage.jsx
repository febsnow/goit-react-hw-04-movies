import React, { Component } from "react";
import PreLoader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getMovieDetails } from "../../utils/api";
import styles from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loader: true, error: null });
    getMovieDetails(this.props.match.params.movieId)
      .then(({ data }) => this.setState({ movie: data }))
      .catch((error) => this.setState({ error: error }))
      .finally(this.setState({ loader: false }));
  }

  clickHandler = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push("/");
  };

  render() {
    const { movie, loader, error } = this.state;
    const { path, url } = this.props.match;

    return (
      <div className={styles.moviePage}>
        <button
          type="button"
          className={styles.button}
          onClick={this.clickHandler}
        >
          BACK
        </button>
        {loader && <PreLoader />}
        {movie && <MovieCard movie={movie} url={url} path={path} />}
      </div>
    );
  }
}

export default MovieDetailsPage;
