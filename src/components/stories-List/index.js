import React, { Component } from 'react';
import './index.scss';

class StoriesList extends Component {
    state = {}
    render() {
        return (
            <div className="stories_list">
                <div className="top-section">
                    <h3>Stories</h3>
                    <button>Sync</button>
                </div>
                <div className="mid-section">
                    <button  className="selected">Pending</button>
                    <button>Fixed</button>
                </div>
                <ul className="list-section">
                    <li>story title</li>
                    <li>story title</li>
                    <li>story title</li>
                </ul>
            </div>
        );
    }
}

export default StoriesList;