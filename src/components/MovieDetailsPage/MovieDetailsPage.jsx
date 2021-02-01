import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews';

class MovieDetailsPage extends Component {
    state = {
        movie: null
    }
    async componentDidMount() {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=baba47ca8377e85152497efe5912a75b`).then(({ data }) => data);
        this.setState({ movie: movie });
    }
    
    render() {
        const url = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
         
        return (
            <>
                {this.state.movie &&
                <>
                    <img src={`${url}${this.state.movie.poster_path}`} alt={this.state.movie.original_title} />
                    <h2>{this.state.movie.title}</h2>
                    <p>{this.state.movie.overview}</p>
                    <ul>
                        <li> <Link to={`${this.props.match.url}/cast`}>Cast</Link></li>
                        <li><Link to={`${this.props.match.url}/reviews`}>Reviews</Link></li>
                    </ul>
                    
                        <Switch>
                            <Route path={`${this.props.match.path}/cast`} component={Cast}></Route>
                            <Route path={`${this.props.match.path}/reviews`} component={Reviews}></Route>
                        </Switch>
                  
                </>
                }
            </>);
    }

}
 
export default MovieDetailsPage;