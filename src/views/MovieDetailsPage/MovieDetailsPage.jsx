import React, { Component } from "react";
import { toast } from "react-toastify";
import PreLoader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import routes from "../../routes";
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
      .catch((error) => toast.error(error))
      .finally(this.setState({ loader: false }));
  }

  clickHandler = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.home);
  };

  render() {
    const { movie, loader } = this.state;
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
