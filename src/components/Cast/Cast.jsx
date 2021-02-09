import React, { Component } from "react";
import PropTypes from 'prop-types';
import { getMovieCredits } from "../../utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import noPhoto from "../../noPhoto.jpg";
import styles from "./Cast.module.css";

class Cast extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  state = {
    movie: null,
  };

  componentDidMount() {
    getMovieCredits(this.props.match.params.movieId)
      .then(({ data }) => {
        if (data.cast.length === 0)
        { return toast.warning("There is no any information") }
        this.setState({ movie: data })
      })
      .catch((error) => toast.error(error));
  }
  
  render() {
    const url = "https://www.themoviedb.org/t/p/w185";
    const { movie } = this.state;

    return (
      <>
        {movie && (
          <ul className={styles.castList}>
            {movie.cast.map((actor) => (
              <li key={actor.id} className={styles.castListItem}>
                <img
                  src={
                    actor.profile_path === null
                      ? noPhoto
                      : `${url}/${actor.profile_path}`
                  }
                  alt={actor.name}
                ></img>
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
