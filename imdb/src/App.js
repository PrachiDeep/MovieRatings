
import './App.css';
 
import HomePage from './components/HomePage';
 import React, {useState,useEffect,Component } from 'react';

 import { BrowserRouter as Router ,Route, Link, Switch, Redirect } from 'react-router-dom';
 import data from './components/MovieData.json';
import Trailers from './components/Trailers';
import 'bootstrap/dist/css/bootstrap.css' ;
 import Details from './components/Details';
 //import Detail from './components/Detail';
 import SignIn from './components/SignIn';
 import NavBar from './components/NavBar';
 




class App extends Component {



  render() { 
    return (                                       

      <div>
      {/* {
        console.log(data)
      } */}
      <Router>
        
          <Switch>
          <Route path='/' exact ><HomePage data={data}/></Route>
       
          {/* <Route path='/details/:id' exact> <Details data={data}/></Route> */}
          <Route path='/details/:id' component={ Details}/>
          {/* <Route path='/detail/:id' component={ Detail}/> */}
          {/* <Route path='/details/:id' render={(data) => <Details text="Hello, " {...data} />} /> */}
          <Route path='/signin'><SignIn/></Route>
          </Switch>
        
      </Router>
     
      </div>
      
  );

  }
}
 
export default App;