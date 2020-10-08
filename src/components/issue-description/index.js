import React from 'react';
import ReactMarkdown from 'react-markdown';
import PointsBoard from '../points-board';

import './index.scss';

const IssueShowDetails = ({ issue,set_issue }) => {
    return (
        <div className="issue_desc">
            <button onClick={()=>set_issue({})}>goback</button>
            <div><h3>title: </h3>{issue.fields.summary}</div>
            <div><h3>Description: </h3>
                <br />
                <ReactMarkdown source={issue.fields.description} escapeHtml={false} /></div>
            <div><h3>Points:</h3>
                <PointsBoard issue={issue}/>
            </div>
        </div>

    )
}

export default IssueShowDetails;