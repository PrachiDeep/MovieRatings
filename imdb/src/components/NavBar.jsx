import React, { Component } from 'react';
import imdb from '../imdb.png';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Search from './Search';
// import { useHistory } from 'react-router-dom';
// handleSignIn=()=>{
//   console.log(this.props.user)
// }


class NavBar extends Component {
  
    render() { 
      // const isLoggedIn=this.props.userLogIn;
      const renderLogIn=()=>{
        if(this.props.userLogIn)
        {
          console.log(this.props.userName);
          return <span style={{ color: 'white'}}>{this.props.userName|| <Link to="/signin" ><button className="btn btn-outline-success bg-light " >sign in</button>
               
          </Link>}</span>
        }
        else{
          // this.props.onLogIn();
          console.log(this.props.userName);
          console.log(this.props.userLogIn);

          return <Link to="/signin" ><button className="btn btn-outline-success bg-light " >sign in</button>
               
                 </Link>
              //  return <button  onClick={this.props.onLogIn} className="btn btn-outline-success bg-light " >sign in</button>
        }
      }
        return (<div> 
          {/* {console.log(this.props.userLogIn)} */}
          <nav className="navbar navbar-light " style={{  backgroundColor: 'black' }}>
        <div className="container">
          <a className="navbar-brand" >
            <img src={imdb} width="50" height="24" className="d-inline-block align-text-top"/>
          </a>
          

          
               <Search/> 
               {/* <div>{this.props.onLogIn()}</div> */}
               <div> {renderLogIn()}</div>
               {/* {console.log(this.props.userLogIn)} */}
                {/* <Switch>
                 <Route path='./Details/' component={Details}></Route>
               </Switch> */}
     
     
        </div>
      </nav>
      </div> );
    }
}
 
export default NavBar;
// ()=>(this.props.onLogIn)