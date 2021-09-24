import React, { Component } from 'react';
import Trailers from './Trailers';


import poster1 from '../images/poster1.jpg';
import ReactPlayer from "react-player";

class MovieTrailers extends Component {
   
    render() {
       
        return ( <div>
              <div className="row flex">{this.props.data.Movie.map (trailer=><div className="col-md-12" key= {trailer.id}><Trailers each={trailer}/></div>)}</div> 
            
             </div> );
    }
}
 
export default MovieTrailers;