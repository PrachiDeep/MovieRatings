import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css' ;
import NavBar from './NavBar';
//import Col from './Col';
// import poster1 from '../poster1.jpg';
// import poster2 from '../poster2.jpeg';
// import poster3 from '../Cinderella.jpg';
// import poster4 from '../venom.j pg';
// import poster5 from '../shershah.jpg';
// import images from '../public/images';
import Movie from './Movie';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MovieTrailers from './MovieTrailers';
import MovieListing from './MovieListing';

class HomePage extends Component {

 
  
 
    render() { 
        return (<React.Fragment>
          {/* {this.handleSignIn} */}
            {console.log("homepage"+this.props.userLogIn)}
            {console.log("home"+this.props.userName)}
            <NavBar userLogIn={this.props.userLogIn} userName={this.props.userName} />
            <div className="row">
              <div className="col-md-9">
              
              <MovieListing data={this.props.data}/>
                  </div>
              

              <div className="col-md-3">
                  <MovieTrailers data={this.props.data}/>
              </div>

            </div>
            
            </React.Fragment>);
    }
}
export default HomePage;
 
            {/* the beggining of row-col */}
            {/* <div className="container">
  <div className="row">

      {/* left side col starts*/}
    {/* <div className="col align-self-start col-md-9  " >

{/*start of left side grid */}
//     <div className="container">

//  {/*1st row of left side grid */}     
//     <div className="row">
//     <div className="col align-self-start col-md-4  "  >col1</div>
//     <div className="col align-self-start col-md-4  "  >col2</div>
//     <div className="col align-self-start col-md-4  "  >col3</div>
//     </div>
//      {/*2nd row of left side grid */}
//     <div className="row">
//     <div className="col align-self-start col-md-4  "  >col1</div>
//     <div className="col align-self-start col-md-4  "  >col2</div>
//     <div className="col align-self-start col-md-4  "  >col3</div>
//     </div>
//     </div>
//     </div>
//     {/* end of the left side col */}


//     {/* start of the right  side col */}
//     <div className="col-md-3 bg-light">
//       <div className="container">
//       <div className="row">
//       <div className="col align-self-start col-md-4  "  >col1</div>
//     <div className="col align-self-start col-md-4  "  >col2</div>
//     <div className="col align-self-start col-md-4  "  >col3</div>
//       </div> 
//       <div className="row">
//       <div className="col align-self-start col-md-4  "  >col1</div>
//     <div className="col align-self-start col-md-4  "  >col2</div>
//     <div className="col align-self-start col-md-4  "  >col3</div>
//       </div> 
//       </div>
//     </div>
//     {/* end of the right  side col */}
//   </div>
  {/* <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div> */}
// </div> */} */}
           
            {/* <div   style={{
          backgroundColor: 'black'
        }} className="container-fluid">
  <div className="row justify-content-md-start">
  <div className=" col-sm-3 " > <img className="img-fluid" src= "images/poster1.png"width="80%" height="90%" /></div>
    <div className="col-6 col-sm-3 "><img  className="img-fluid" src={poster2} width="98%" height="98%" /></div>
    <div className="col-6 col-sm-3 "> <img className="img-fluid" src={poster3} width="80%" height="90%" /></div>
    {/* <div className="col-9 col-sm-3 me-auto bg-light ">
          <div class="container">
           <div className="row justify-content-md-start">1111 </div>
           <div className="row justify-content-md-start"> 22222</div>
           <div className="row justify-content-md-start">333333333 </div>
    </div>
    </div>
    
    <div className="w-1000"></div>
    <div className="row justify-content-md-start">
  <div className="col-6 col-sm-3 " > <img className="img-fluid" src={poster4}width="85%" height="90%" /></div>
    <div className="col-6 col-sm-3 "><img  className="img-fluid" src={poster5} width="85%" height="20%" /></div>
    <div className="col-6 col-sm-3 "> <img className="img-fluid" src={poster1} width="80%" height="90%" /></div>
    <div className="col-6 col-sm-3 me-auto bg-light ">
       <div class="container">
           <div className="row row align-items-start">4444444 </div>
           <div className="row row align-items-center"> 5555555555</div>
           <div className="row row align-items-end">888888888</div> */}
  //   </div>
  //   </div>


  //  */}
  



