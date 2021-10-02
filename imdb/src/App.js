
import './App.css';
import HomePage from './components/HomePage';
 import React, {useState,useEffect,Component } from 'react';
import { BrowserRouter as Router ,Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import data from './components/MovieData.json';
import 'bootstrap/dist/css/bootstrap.css' ;
 import Details from './components/Details';
 import SignIn from './components/SignIn';
 




class App extends Component {


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
     
      <Router>
        
          <Switch>
          <Route path='/' exact >
            <HomePage userLogIn={this.state.isLoggedIn} userName={this.state.name}  data={data}/>
            </Route>
       
        
          <Route path='/details/:id' component={ Details}/>
          <Route path='/signin'><SignIn onLogIn={this.handleLogIn} /></Route>
          </Switch>
        
      </Router>
     
      </div>
      
  );

  }
}
 
export default App;