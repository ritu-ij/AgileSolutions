import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PointsBoard from '../points-board';
import {EditIssueDetails,getIssueDetails} from '../../api/apiCalls';

import './index.scss';

const IssueShowDetails = ({ issue,set_issue }) => {
    const [issue_data,setissue_data] = useState({});
    const [points,setPoints] = useState();

    useEffect(()=>{
        setissue_data(issue);
        setPoints(issue.fields.customfield_10032);
    },[issue]);

    const EditIsuueDetail = (points) =>{
        if(points && points > 0){
        const data ={
            "fields": {
                "customfield_10032": points
            }
        }
        EditIssueDetails(issue_data.id,JSON.stringify(data)).then(()=>{
            getIssueDetails(issue_data.id).then(res=>{
                setissue_data(res)
            });
        })
        }else{
            setPoints(issue_data.fields.customfield_10032)
        }

    }

    
    return (
        <div className="issue_desc">
            <button onClick={()=>set_issue({})}>goback</button>
           { issue_data && Object.keys(issue_data).length > 0 && <>
            <div><h3>title: </h3>{issue_data.fields.summary}</div>
            <div><h3>Description: </h3>
                <br />
                <ReactMarkdown source={issue_data.fields.description} escapeHtml={false} /></div>
            <div><h3>Points: <input value={points} type="number" onBlur={(e)=>EditIsuueDetail(points)} onChange={(e)=>setPoints(e.target.value)}/></h3>
                <PointsBoard issue={issue}/>
            </div>
            </>}
        </div>

    )
}

export default IssueShowDetails;