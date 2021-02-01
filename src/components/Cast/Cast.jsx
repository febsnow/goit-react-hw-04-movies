import React, { Component } from "react";
import axios from "axios";
import styles from "./Cast.module.css";

class Cast extends Component {
  state = {
    movie: null,
  };
  async componentDidMount() {
    const movie = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=baba47ca8377e85152497efe5912a75b`
      )
      .then(({ data }) => data);
    this.setState({ movie: movie });
  }

  render() {
    const url = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
    return (
      <>
        {this.state.movie && (
          <ul className={styles.castList}>
            {this.state.movie.cast.map((actor) => (
              <li key={actor.id} className={styles.castListItem}>
                <img
                  src={`${url}/${actor.profile_path}`}
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
