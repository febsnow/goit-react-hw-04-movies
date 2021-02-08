import { lazy, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PreLoader from "../Loader/Loader";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, url, path }) {
  const imgUrl = "https://www.themoviedb.org/t/p/w780";
  const CastList = lazy(() =>
    import("../Cast/Cast" /*webpackChunkName: "cast-list" */)
  );
  const ReviewsList = lazy(() =>
    import("../Reviews/Reviews" /*webpackChunkName: "reviews-list" */)
  );

  return (
    <div className={styles.movieCard}>
      <img src={`${imgUrl}${movie.poster_path}`} alt={movie.original_title} />
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
            <Link to={`${url}/reviews`} className={styles.additionsListItem}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<PreLoader />}>
          <Switch>
            <Route path={`${path}/cast`} component={CastList}></Route>
            <Route path={`${path}/reviews`} component={ReviewsList}></Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
