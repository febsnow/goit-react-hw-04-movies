import React, { Component } from "react";
import PropTypes from "prop-types";
import PreLoader from "../Loader/Loader";
import { getMovieReviews } from "../../utils/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
    loader: false,
  };

  componentDidMount() {
    this.setState({ loader: true });
    getMovieReviews(this.props.match.params.movieId).then(({ data }) => {
        if (data.results.length === 0)
        {return toast.warn("No reviews yet") }
        this.setState({ reviews: data.results })
      })
      .catch((error) => toast.error(error))
      .finally(this.setState({ loader: false }));
  }

  render() {
    const { reviews, loader } = this.state;
    return (
      <>
        {loader && <PreLoader />}
        {reviews.length > 0 && (
          <ul className={styles.reviewsList}>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p className={styles.reviewContent}>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

Reviews.propTypes = {};

export default Reviews;
