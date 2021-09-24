import React, { Component } from 'react';
import Movie from './Movie';
import poster1 from '../images/poster1.jpg';

class MovieListing extends Component {
    


    render() { 
        return ( <div>
          
          {/* <div>{this.props.data.Movie.map(m => <Details detail={m}/>)}</div>  */}
            <div className="row flex">{this.props.data.Movie.map (movie=><div className="col-md-3" key= {movie.id}><Movie each={movie}/></div>)}</div>
           {/* <Details details={this.state.movie.title}/> */}
        </div> );
    }
}
 
export default MovieListing;