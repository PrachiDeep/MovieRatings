import React, { Component } from 'react';
class Search extends React.Component {
    render() { 
        return <div>
                 <form>
                     <input type="text" placeholder="search IMDb"/>
                    <button type="submit">Search</button>
                 </form>
             </div>;
    }
}
 
export default Search;