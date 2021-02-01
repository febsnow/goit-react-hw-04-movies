import React, { Component } from "react";
import styles from "./MoviePage.module.css";

class MoviesPage extends Component {
  state = {
    value: "",
  };

  changeHandler = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === "") {
      this.setState({ value: "" });
      return alert("enter request");
    }
    // this.props.onSubmit(this.state.value.toLowerCase().trim());
    this.setState({ value: "" });
  };
  render() {
    return (
      <>
        <form className={styles.searchForm} onSubmit={this.submitHandler}>
          <input
            className={styles.searchInput}
            type="text"
            autoFocus
            placeholder="enter search request"
            value={this.state.value}
            onChange={this.changeHandler}
          />
        </form>
      </>
    );
  }
}

export default MoviesPage;
