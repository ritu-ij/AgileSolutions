import React, { Component } from 'react';
import './index.scss';

const PeopleList = ({ data }) => {
    return (
        <div className="people_list">
            <div className="top-section">
                <h3>People</h3>
            </div>
            <ul className="list">
                {
                    data && data.length > 0 && 
                    data.map((user,i)=>user.accountType == 'atlassian' && <li><img src={user.avatarUrls['16x16']}/>{user.displayName}</li>)
                }
                
            </ul>
        </div>
    );
}

export default PeopleList;