import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SearchBar.module.css";

export default class SearchBar extends Component {
  state = {
    value: "",
    error: null,
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    if (this.state.value.trim() === "") {
      this.setState({ value: "" });
      toast.error("Enter something");
    }
    this.props.onSubmit(this.state.value.toLowerCase().trim());
    this.setState({ value: "" });
  };

  changeHandler = (evt) => {
    const { value } = evt.target;
    this.setState({ value: value });
  };

  render() {
    return (
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
    );
  }
}
