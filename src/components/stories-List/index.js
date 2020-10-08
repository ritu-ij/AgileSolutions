import React, { Component, useState } from 'react';
import IssueDescription from '../issue-description';
import './index.scss';

const StoriesList = ({ data }) => {
    const [s_issue, set_issue] = useState({});
    return (
        <div className="stories_list container">
            {(!s_issue || Object.keys(s_issue).length == 0) &&
                <>
               <div className="row head-section">
                <div className="col-md-8 col-sm-6">
                    <ul className="tab">
                        <li className="selected"><a href="">Pending</a></li>
                        <li><a href="">Ready</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6">
                    <button>Sync</button>
                </div>
            </div>
            <ul className="list-section">
            {Array.isArray(data) && data.length > 0 && 
            data.map((o,i)=><li onClick={()=>{console.log('test');set_issue(o)}}>{o.id}--- {o.key}</li>)}
            </ul>
                </>
            }
            {s_issue && Object.keys(s_issue).length > 0 && <IssueDescription issue={s_issue} set_issue={set_issue}/>}

        </div>
    );
}

export default StoriesList;