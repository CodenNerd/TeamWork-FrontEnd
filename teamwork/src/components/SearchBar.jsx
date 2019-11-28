import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="search-bar">
            <input type="text"/> <i className="fas fa-search"></i>
        </div> );
    }
}
 
export default SearchBar;