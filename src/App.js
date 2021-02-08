import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import TrandingMovies from "./views/TrandingMovies/TrandingMovies";
import PreLoader from "./components/Loader/Loader";
import "./components/styles.css";
import routes from "./routes";

const MoviesPageView = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage" /*webpackChunkName: "moviesPageView" */
  )
);

const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage"
    /*webpackChunkName: "movieDetailsView-page" */
  )
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Suspense fallback={<PreLoader />}>
          <Switch>
            <Route path={routes.home} exact component={TrandingMovies}></Route>
            <Route
              path={routes.movies}
              exact
              component={MoviesPageView}
            ></Route>
            <Route
              path={routes.movieDetails}
              component={MovieDetailsView}
            ></Route>
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
