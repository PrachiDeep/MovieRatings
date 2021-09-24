import React, { Component } from 'react';
// import data from './MovieData.json';


// const movieList=data.movie;
class Trailers extends Component {
render(){
       return (
        <div className="row flex" >
               <div className="col-md-4"> 
             <div className = "row flex"><img width="200" height="100" src={this.props.each.imgSrc} /></div>
              <div className = "row flex"><a href={this.props.each.redirect} target="_blank">Watch trailer</a></div>
                </div>
                 <div className="col-md-8"  > <textarea rows = "5" cols = "25" maxlength = "100" >{this.props.each.summary}</textarea> </div> 
                </div>
           
        );
    }
  }

 
export default Trailers;
