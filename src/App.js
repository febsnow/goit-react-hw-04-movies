import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import TrandingMovies from "./components/TrandingMovies/TrandingMovies";

// В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Search</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={TrandingMovies}></Route>
          <Route path="/movies" exact component={MoviesPage}></Route>
          <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
