import React, { Component, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import queryParse from "../../utils/queryParse";
import SearchBar from "../../components/SearchBar/SearchBar";
import PreLoader from "../../components/Loader/Loader";
import NotFoud from "../NotFound/NotFound";

import { getMovies, getTopRatedMovies } from "../../utils/api";

const MoviesList = lazy(
  () =>
    import(
      "../../components/MoviesList/MoviesList"
    ) /* webpackChunkName: "movies-list" */
);

class MoviesPage extends Component {
   static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    movies: null,
  };

  submitHandler = (query) => {
    if (query !== "") {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });
    }
  };

  fetchMovies = (query) => {
    getMovies(query).then(({ data }) => {
      if (data.results.length === 0) {
        this.setState({ movies: null });
        return toast.warn("Nothing found");
      }
      console.log("fetch");
      this.setState({ movies: data.results });
    });
  };

  componentDidMount() {
    const { query } = queryParse(this.props.location.search);
    console.log("mount");
    if (query) {
      return this.fetchMovies(query);
    }

    getTopRatedMovies().then(({ data }) =>
      this.setState({ movies: data.results })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryParse(prevProps.location.search);
    const { query: newQuery } = queryParse(this.props.location.search);

    if (prevQuery !== newQuery && newQuery) {
      this.fetchMovies(newQuery);
    }
  }

  render() {
    const { movies } = this.state;
    const { query } = queryParse(this.props.location.search);

    return (
      <>
        <SearchBar onSubmit={this.submitHandler} />
        <Suspense fallback={<PreLoader />}>
          {movies && (
            <MoviesList
              movies={movies}
              title={
                this.props.location.search === ""
                  ? "Top rated movies"
                  : `Search result for "${query}"`
              }
            />
          )}
          {!movies && <NotFoud/>}
        </Suspense>
        {/* {movies && (
          <ul className={styles.movieList}>
            {this.state.movies.map(
              ({ id, poster_path, original_title, title }) => (
                <li key={id} className={styles.movieItem}>
                  <Link
                    to={{
                      pathname: `/movies/${id}`,
                      state: {
                        from: this.props.location,
                      },
                    }}
                  >
                    <div className={styles.movieCard}>
                      <img src={`${url}${poster_path}`} alt={original_title} />
                      <h2>{title}</h2>
                    </div>
                  </Link>
                </li>
              )
            )}
          </ul>
        )} */}
      </>
    );
  }
}

export default MoviesPage;
