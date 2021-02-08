import { Link, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, location }) => {
  const url = "https://www.themoviedb.org/t/p/w342";
  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, poster_path, original_title, title }) => (
        <li key={id} className={styles.movieItem}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <div className={styles.movieCard}>
              <img src={`${url}${poster_path}`} alt={original_title} />
              <h2>{title}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
