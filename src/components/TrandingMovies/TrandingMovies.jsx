import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PreLoader from "../Loader/Loader";
import styles from "./TrandingMovies.module.css";

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
    const url = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    const { movies, loader } = this.state;

    return (
      <>
        {loader && <PreLoader />}
        {movies && (
          <ul className={styles.movieList}>
            {movies.map(({ id, poster_path, original_title, title }) => (
              <li key={id} className={styles.movieItem}>
                <Link to={`/movies/${id}`}>
                  <div className={styles.movieCard}>
                    <img src={`${url}${poster_path}`} alt={original_title} />
                    <h2>{title}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
