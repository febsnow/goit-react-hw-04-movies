import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class TrandingMovies extends Component {
    state = {
        movies: null
    };
async componentDidMount() {
      const movies = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=baba47ca8377e85152497efe5912a75b').then(({data})=> data.results);
        this.setState({ movies });
    
    
}


    render() { 
        const url ="https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
        return (
        <>
                {this.state.movies && <ul>{this.state.movies.map(movie =>
                    <li key={movie.id}><Link to={`/movies/${movie.id}`}><img src={`${url}${movie.poster_path}`} alt={movie.original_title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p></Link></li>)}
                    </ul>}
        </>);
    }
}
 
