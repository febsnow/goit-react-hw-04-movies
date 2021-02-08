import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "./Reviews.module.css";
import PreLoader from "../Loader/Loader";

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    loader: false,
  };

  componentDidMount() {
    this.setState({ error: null, loader: true });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=baba47ca8377e85152497efe5912a75b&language=en-US&page=1`
      )
      .then((data) => this.setState({ reviews: data.data.results }))
      .catch((error) => this.setState({ error: error }))
      .finally(this.setState({ loader: false }));
  }

  render() {
    const { reviews, loader } = this.state;
    return (
      <>
        {loader && <PreLoader />}
        {reviews.length > 0 ? (
          <ul className={styles.reviewsList}>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p className={styles.reviewContent}>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet</p>
        )}
      </>
    );
  }
}

Reviews.propTypes = {};

export default Reviews;
