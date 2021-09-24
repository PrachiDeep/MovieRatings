import React, { Component } from 'react';
import NavBar from './NavBar';
import data from  './MovieData.json'
import ReactPlayer from 'react-player'
import { BrowserRouter as Router, Route, Link, Switch ,Redirect} from 'react-router-dom';
class Details extends Component {
     handleDetails=(cId)=>{


        //  console.log(data)
        //  console.log(cId)
         var res= data.Movie.find(function(item)
         {
             return item.id==cId;
         }
         );
      
         return res;
    }
    render() { 
        return (
            <div style={{  backgroundColor: 'slategrey' ,padding:'20px 40px' ,color: "white"}}>
                <NavBar/>
                {console.log(this.props.match.params.id)} 
                {/* {console.log(data)}  */}
                {console.log(this.handleDetails(this.props.match.params.id).raitings)}
                
                <div >
           
            <div className= "row flex" >
                <div className="col-md-10">
                    <div className="row flex"  > <h2 > {(this.handleDetails(this.props.match.params.id).title)}</h2></div>
                    <div className="row flex"> {(this.handleDetails(this.props.match.params.id)['y-o-r'])}.{(this.handleDetails(this.props.match.params.id).certification)}.{(this.handleDetails(this.props.match.params.id).runtime)}</div>
                </div>
                <div className="col-md-2">
                    <div className="row flex">IMDB ratings</div>
                    <div className="row flex"><img width="10" height="10" src="https://static4.depositphotos.com/1001003/335/i/950/depositphotos_3350007-stock-photo-3d-star.jpg"/>{(this.handleDetails(this.props.match.params.id).raitings)}</div>
                </div>
                {/* <div className="col-md-1">
                <div className="row flex"></div>
                <div className="row flex"></div>
                </div> */}
            </div>
            <div className= "row flex">
                <div className="col-md-3">
                <img   width="300" height="370" src={(this.handleDetails(this.props.match.params.id).imgSrc)}/>
                </div>
                <div className="col-md-9" >
                <ReactPlayer url= {(this.handleDetails(this.props.match.params.id).redirect)}/>
                </div>
               
            </div>
           
           
            <div className="row flex">summary</div>
            


        </div>;
               <div> <Link to="/" >go to HomePage
             {/* <div style={{content:`url(${this.props.each.imgSrc})`}}></div> */}
             </Link>
             </div>
            
             </div>);
    }
}
 
export default Details;


        //          {/* {console.log(data.Movie.title)} */}
        //          {/* {console.log(this.handleDetails(this.props.match.params.id))} */}
        //    {/* <div>{this.props.details}</div> */}
        //    {/* <div>{this.props.details.id}</div> */}
        //    {/* {console.log(this.props.match.params.id)} */}
          

        // <div className="row-flex">
        // <div className="col-md-3">sfdef</div>
        // {/* <div className="col-md-3"><img   src={(this.handleDetails(this.props.match.params.id).imgSrc)}/></div> */}
        // <div className="col-md-7"><ReactPlayer url= {(this.handleDetails(this.props.match.params.id).redirect)}/></div>
        // </div>