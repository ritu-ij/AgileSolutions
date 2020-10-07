import React, {Component} from 'react';
import './index.scss';

class Search extends Component {
    state = {  }
    render() { 
        return ( <div className="search">
            <input name="search" type="text"/>
            <button>Search</button>
        </div> );
    }
}
 
export default Search;