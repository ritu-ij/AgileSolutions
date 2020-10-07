import React,{PureComponent} from 'react';
import Search from '../../../components/Search';
import StoriesList from '../../../components/stories-List';
import PeopleList from '../../../components/people-list';
import {getAllProject} from '../../../api/apiCalls';
import './index.scss';

class Dashboard extends PureComponent {
    componentDidMount(){
        // getAllProject('backlog');
    }
    state = {  }
    render() { 
        return (
            <div className="main-div">
                <div className="container-search">
                    <h3>Agile Agents</h3><Search/>
                </div>
                <div className="container-stories">
                    <StoriesList/>
                    <PeopleList/>
                </div>
            </div>  
        );
    }
}
 
export default Dashboard;