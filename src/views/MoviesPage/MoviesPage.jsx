import React, { Component, lazy, Suspense } from "react";
import queryParse from "../../utils/queryParse";
import SearchBar from "../../components/SearchBar/SearchBar";
import PreLoader from "../../components/Loader/Loader";
import { getMovies, getTopRatedMovies } from "../../utils/api";
import { toast } from "react-toastify";
// import styles from "./MoviesPage.module.css";

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

  fetchMovies = (query) => {
    getMovies(query).then(({ data }) =>
    {
      if (data.results.length === 0)
      {
        this.props.history.push( '/movies');
        return toast.warn("Nothing found")
      }
      this.setState({ movies: data.results })
    }
    );
  };

  componentDidMount() {
    const { query } = queryParse(this.props.location.search);

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

    if (!prevQuery && prevQuery !== newQuery) {
      this.fetchMovies(newQuery);
    }
  }

  render() {
    const MoviesList = lazy(
      () =>
        import(
          "../../components/MoviesList/MoviesList"
        ) /* webpackChunkName: "movies-list" */
    );
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.submitHandler} />
        <Suspense fallback={<PreLoader />}>
          {movies && <MoviesList movies={movies} />}
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
