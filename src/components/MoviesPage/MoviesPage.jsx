import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryParse from "../../utils/queryParse";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./MoviePage.module.css";

class MoviesPage extends Component {
  state = {
    movies: null,
  };

  submitHandler = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  // componentDidMount() {
  //   this.props.history.push({
  //     pathname: this.props.location.pathname,
  //     search: null,
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryParse(prevProps.location.search);
    const { query: newQuery } = queryParse(this.props.location.search);

    if (!prevQuery && prevQuery !== newQuery) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=baba47ca8377e85152497efe5912a75b&query=${newQuery}`
        )
        .then(({ data }) => this.setState({ movies: data.results }));
    }
  }

  render() {
    const url = "https://www.themoviedb.org/t/p/w220_and_h330_face";
    return (
      <>
        <SearchBar onSubmit={this.submitHandler} />
        {this.state.movies && (
          <ul className={styles.movieList}>
            {this.state.movies.map(
              ({ id, poster_path, original_title, title }) => (
                <li key={id} className={styles.movieItem}>
                  <Link to={`/movies/${id}`}>
                    <div className={styles.movieCard}>
                      <img src={`${url}${poster_path}`} alt={original_title} />
                      <h2>{title}</h2>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
