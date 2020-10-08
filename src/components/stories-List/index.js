import React, { Component } from 'react';
import './index.scss';

const StoriesList  = ({data}) => {
    return (
        <div className="stories_list">
            <div className="top-section">
                <h3>Stories</h3>
                <button>Sync</button>
            </div>
            <div className="mid-section">
                <button className="selected">Pending</button>
                <button>Fixed</button>
            </div>
            <ul className="list-section">
            {Array.isArray(data) && data.length > 0 && 
            data.map((o,i)=><li>{o.id}--- {o.key}</li>)}
            </ul>
        </div>
    );
}

export default StoriesList;