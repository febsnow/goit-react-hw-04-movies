import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import PreLoader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import routes from "../../routes";
import { getMovieDetails } from "../../utils/api";
import styles from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    movie: null,
    loader: false,
  };

  componentDidMount() {
    this.setState({ loader: true});
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
