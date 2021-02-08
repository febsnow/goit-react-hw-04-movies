import axios from "axios";

const KEY = "baba47ca8377e85152497efe5912a75b";
const URL = "https://api.themoviedb.org/3";

export function getTrandingMovies() {
  const endPoint = "trending/movie/day";

  return axios
    .get(`${URL}/${endPoint}?api_key=${KEY}`)
    .then(({ data }) => data.results);
}

export function getMovies(query) {
  const endPoint = "search/movie";
  return axios.get(`${URL}/${endPoint}?api_key=${KEY}&query=${query}`);
}

export function getMovieDetails(movieId) {
  const endPoint = "movie";
  return axios.get(`${URL}/${endPoint}/${movieId}?api_key=${KEY}`);
}

export function getMovieCredits(movieId) {
  const endPoint = "movie";
  return axios.get(`${URL}/${endPoint}/${movieId}/credits?api_key=${KEY}`);
}

export function getTopRatedMovies() {
  const endPoint = "movie/top_rated";
  return axios.get(`${URL}/${endPoint}?api_key=${KEY}`);
}
