import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class SignIn extends Component {
  state={name: null,password: null};

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  updateName=(e)=> {
    this.setState({
      name: e.target.value
    });
  }
  updatePassword=(e)=> {
    this.setState({
      password: e.target.value
    });
  }

  routeChange=(path)=> {
    this.props.history.push(path);
  }
  onLog=(e)=>{
    e.preventDefault();
    const val= this.props.onLogIn(this.state.name,this.state.password)
    if(val== true)
    {
      this.routeChange("/")

    }
    else{
      alert("invalid name password");
    }
  }
  render() { 
    return (<div> <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-google-plus-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div><input type="text" value={this.state.name} onChange={e => this.updateName(e)} className="form-control" placeholder="username"/></div>
             
            
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" value={this.state.password} onChange={e => this.updatePassword(e)} className="form-control" placeholder="password"/>
            </div>
            <div class="row align-items-center remember">
              <input type="checkbox"/>Remember Me
            </div>
            <div class="form-group">
              <button onClick={this.onLog} className="btn btn-outline-success bg-light " >Login</button>
              
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </div>);
  }
}

export default withRouter(SignIn);