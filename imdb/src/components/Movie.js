import React, { Component } from 'react';
import Details from './Details';
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom';
import data from "./MovieData.json"
// import {Redirect} from 'react-router-dom';
// import {browserHistory} from "react-router";
import {poster1} from '../Data/Images'
class Movie extends Component {
   
    render() { 
        
        return ( 
            <div>

                <Link to={"/details/"+this.props.each.id} ><img width="170" height="300" src={this.props.each.imgSrc}  /> </Link> 
                {/* <Details id={this.props.each.id}/> */}
            </div>
              );
            }
             }

export default Movie;
