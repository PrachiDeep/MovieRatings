import React, { Component } from 'react';
import NavBar from './NavBar';
import data from  './MovieData.json'
class Detail extends Component {
    render() { 
        return <div style={{  backgroundColor: 'black' ,padding:'0px 20px' ,color: "white",}}>
            <NavBar/>
            <div className= "row flex" >
                <div className="col-md-10">
                    <div className="row flex"  > <h2 > Title</h2></div>
                    <div className="row flex">release yr--run time</div>
                </div>
                <div className="col-md-1">ratings</div>
                <div className="col-md-1">popularity</div>
            </div>
            <div className="row-flex">
            <div className="col-md-3">imgsrc</div>
            <div className="col-md-9">yt Window</div>
            </div>
            <div className="row flex">summary</div>


        </div>;
    }
}
 
export default Detail;