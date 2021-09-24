import React, { Component } from 'react';
import imdb from '../imdb.png';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

class NavBar extends Component {
  
    render() { 
        return ( <nav className="navbar navbar-light " style={{  backgroundColor: 'black' }}>
        <div className="container">
          <a className="navbar-brand" >
            <img src={imdb} width="50" height="24" className="d-inline-block align-text-top"/>
          </a>
          
                
                <Link to="/signin" ><button className="btn btn-outline-success bg-light " >sign in</button>
                {/* <div style={{content:`url(${this.props.each.imgSrc})`}}></div> */}
                </Link>
                {/* <Switch>
                 <Route path='./Details/' component={Details}></Route>
               </Switch> */}
     
     
        </div>
      </nav> );
    }
}
 
export default NavBar;
