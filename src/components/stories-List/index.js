import React, { Component, useState } from 'react';
import IssueDescription from '../issue-description';
import './index.scss';

const StoriesList = ({ data }) => {
    const [s_issue, set_issue] = useState({});
    const [storyType, setSToryType] = useState("pending");
    const showSTory = (points)=>{
        if(storyType == 'pending'){
            if(points && points > 0){
                return false;
            } else{
                return true;
            }
        }else{
            if(points && points > 0){
                return true;
            } else{
                return false;
            }
        }
    }
    return (
        <div className="stories_list container">
            {(!s_issue || Object.keys(s_issue).length == 0) &&
                <>
               <div className="row head-section">
                <div className="col-md-8 col-sm-6">
                    <ul className="nav nav-tabs tab">
                        <li className="nav-item" onClick={()=>setSToryType('pending')}><a className={storyType =='pending'?'active':''}>Pending</a></li>
                        <li className="nav-item" onClick={()=>setSToryType('ready')}><a className={storyType =='ready'?'active':''}>Ready</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6">
                    <button className="sync"><i class="fa fa-spin fa-refresh" aria-hidden="true"></i></button>
                </div>
            </div>
            <ul className="list-section">
            {Array.isArray(data) && data.length > 0 && 
                data.map((o,i)=>showSTory(o.fields.customfield_10032) && <li onClick={()=>{set_issue(o)}} key={o.id}>{o.id}--- {o.key}---points:{o.fields.customfield_10032}</li>)}
            </ul>
                </>
            }
            {s_issue && Object.keys(s_issue).length > 0 && <IssueDescription issue={s_issue} set_issue={set_issue}/>}

        </div>
    );
}

export default StoriesList;