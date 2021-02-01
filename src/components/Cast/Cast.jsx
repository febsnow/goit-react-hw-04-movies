import React, { Component } from 'react';
import axios from 'axios'

class Cast extends Component {
    state = {
        movie: null
    }
  async componentDidMount() {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=baba47ca8377e85152497efe5912a75b`).then(({ data }) => data);
        this.setState({ movie: movie });
    }
    
    render() {
         const url = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
        return (
            <>
                {this.state.movie && <ul>{this.state.movie.cast.map(actor =>
                    <li key={actor.id}><h3>{actor.name}</h3>
                        <img src={`${url}/${actor.profile_path}`} alt={actor.name}></img></li>)}</ul>}
                {this.state.movie && <ul>{this.state.movie.crew.map(person =>
                    <li key={person.id}><p>{person.name}:{person.department}</p></li>)}</ul>   }
            </>
        );
    }
}

export default Cast;