import React, { Component } from 'react';
class Search extends Component {
    state={name:null};
    

    updateName=(e)=> {
      
        this.setState({
          name: e.target.value
        });
    }
        
    searchMovie=(e)=>{
        e.preventDefault();
        console.log(this.state.name);
        this.props.searchMovie(this.state.name);
   
    }
    render() { 
        return (<div>
                 <form>
                     <input type="text"  onChange={e => this.updateName(e)} placeholder="search IMDb"/>
                    <button onClick={this.searchMovie} >Search</button>
                
                 </form>
             </div>);
    }
}

 
export default Search;