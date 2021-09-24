import React, { Component } from 'react';
import poster1 from '../images/poster1.jpg';

class Col extends Component {
    
  
    render() { 
       
        return (  <React.Fragment>
                <span> {this.state.movie.id}         
                    <a className="navbar-brand" >
                    <img src={poster1} width="100" height="100" />
                     </a>
                </span>
          </React.Fragment> 
          );
    }
}
 
export default Col;
{/* <div className="container">
<div className="row">

    {/* left side col starts*/}
//   <div className="col align-self-start col-md-9  " >

// {/*start of left side grid */}
//   <div className="container">

// {/*1st row of left side grid */}     
//   <div className="row">
//   <div className="col align-self-start col-md-4  "  ></div>
 
//   </div> 
//   </div> 
//   </div> 
//   <div className="col-md-3 bg-light">
// <div className="container">
// <div className="row">
// <div className="col align-self-start col-md-4  "  >col1</div>

// </div> 
// </div>
//   </div> 
//   </div> 
//   </div> */}
