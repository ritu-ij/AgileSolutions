import React,{Component} from 'react';
import './index.scss';

class peopleList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="people_list">
                <div className="top-section">
                    <h3>People</h3>
                </div>
                <ul className="list">
                    <li><div className="avatar">N</div>nency</li>
                    <li><div className="avatar">N</div>nency</li>
                    <li><div className="avatar">N</div>nency</li>
                    <li><div className="avatar">N</div>nency</li>
                    <li><div className="avatar">N</div>nency</li>
                </ul>
            </div> 
        );
    }
}
 
export default peopleList;