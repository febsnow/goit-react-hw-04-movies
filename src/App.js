import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import NavBar from "./components/NavBar/NavBar";
import TrendingMovies from "./views/TrendingMovies/TrendingMovies";
import PreLoader from "./components/Loader/Loader";
import routes from "./routes";
import "./components/styles.css";

const MoviesPageView = lazy(() => import("./views/MoviesPage/MoviesPage" /*webpackChunkName: "moviesPageView" */));

const MovieDetailsView = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage"
    /*webpackChunkName: "movieDetailsView-page" */
  )
);

export default function App() {
  return (
    <>
      <NavBar />
      <ToastContainer
        transition={Flip}
        autoClose={2000}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Suspense fallback={<PreLoader />}>
        <Switch>
          <Route path={routes.home} exact component={TrendingMovies}></Route>
          <Route path={routes.movies} exact component={MoviesPageView}></Route>
          <Route path={routes.movieDetails} component={MovieDetailsView}></Route>
        </Switch>
      </Suspense>
    </>
  );
}
