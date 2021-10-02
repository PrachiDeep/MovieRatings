import React, { Component } from 'react';
import imdb from '../imdb.png';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './Search';



class NavBar extends Component {
  
    render() { 
      const renderLogIn=()=>{
        if(this.props.userLogIn)
        {
                    return <span style={{ color: 'white'}}>{this.props.userName|| <Link to="/signin" ><button className="btn btn-outline-success bg-light " >sign in</button>
               
          </Link>}</span>
        }
        else{
          return <Link to="/signin" ><button className="btn btn-outline-success bg-light " >sign in</button>
               
                 </Link>
             
        }
      }
        return (<div> 
                   <nav className="navbar navbar-light " style={{  backgroundColor: 'black' }}>
        <div className="container">
          <a className="navbar-brand" >
            <img src={imdb} width="50" height="24" className="d-inline-block align-text-top"/>
          </a>
          

          
               <Search searchMovie={this.props.searchMovie}/> 
               <div> {renderLogIn()}</div>
               
        </div>
      </nav>
      </div> );
    }
}
 
export default NavBar;
// ()=>(this.props.onLogIn)