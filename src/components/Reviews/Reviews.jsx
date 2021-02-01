import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=baba47ca8377e85152497efe5912a75b&language=en-US&page=1`
      )
      .then((data) => this.setState({ reviews: data.data.results }));
  }

  render() {
    return (
      <>
        {this.state.reviews.length > 0 ? (
          <ul className={styles.reviewsList}>
            {this.state.reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p className={styles.reviewContent}>{review.content}</p>
              </li>
            ))}{" "}
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
