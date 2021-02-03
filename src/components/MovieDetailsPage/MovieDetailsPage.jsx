import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";
import PreLoader from "../Loader/Loader";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loader: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loader: true, error: null });
    const movie = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=baba47ca8377e85152497efe5912a75b`
      )
      .then(({ data }) => data)
      .catch((error) => this.setState({ error: error }));
    this.setState({ movie: movie, loader: false });
  }

  render() {
    const imgUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
    const { movie, loader, error } = this.state;
    const { path, url } = this.props.match;

    return (
      <div className={styles.moviePage}>
        {loader && <PreLoader />}
        {movie && (
          <div className={styles.movieCard}>
            <img
              src={`${imgUrl}${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className={styles.movieInfo}>
              <h2>
                {movie.title} ({movie.release_date})
              </h2>

              <p>{movie.overview}</p>
              <ul className={styles.additionsList}>
                <li>
                  <Link to={`${url}/cast`} className={styles.additionsListItem}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${url}/reviews`}
                    className={styles.additionsListItem}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
              <Switch>
                <Route path={`${path}/cast`} component={Cast}></Route>
                <Route path={`${path}/reviews`} component={Reviews}></Route>
              </Switch>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
