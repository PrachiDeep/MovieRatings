
import './App.css';
import { useHistory } from "react-router-dom";
import HomePage from './components/HomePage';
 import React, {useState,useEffect,Component } from 'react';

 import { BrowserRouter as Router ,Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
 import data from './components/MovieData.json';
import Trailers from './components/Trailers';
import 'bootstrap/dist/css/bootstrap.css' ;
 import Details from './components/Details';
 //import Detail from './components/Detail';
 import SignIn from './components/SignIn';
 import NavBar from './components/NavBar';
import Search from './components/Search';
 




class App extends Component {

//  state={id:1,name: "annie",isLoggedIn: true};
 state={id:1,name: null,isLoggedIn: false};
 
 handleLogIn=(name,password)=>{
    this.setState({isLoggedIn:true});
    if(name=="admin" && password=="admin"){
      this.setState({name:name});
      
      return true;
    }
else {
  return false;
}
     }
   

  render() { 
    return (                                       

      <div>
      {    console.log("app "+this.state.isLoggedIn)}
      <Router>
        
          <Switch>
          <Route path='/' exact >
            <HomePage userLogIn={this.state.isLoggedIn} userName={this.state.name}  data={data}/>
            </Route>
       
          {/* <Route path='/details/:id' exact> <Details data={data}/></Route> */}
          <Route path='/details/:id' component={ Details}/>
          {/* <Route path='/detail/:id' component={ Detail}/> */}
          {/* <Route path='/details/:id' render={(data) => <Details text="Hello, " {...data} />} /> */}
          <Route path='/signin'><SignIn onLogIn={this.handleLogIn} /></Route>
          </Switch>
        
      </Router>
     
      </div>
      
  );

  }
}
 
export default App;