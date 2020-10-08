import React, { useEffect, useState } from 'react';
// import Search from '../../../components/Search';
import StoriesList from '../../../components/stories-List';
import PeopleList from '../../../components/people-list';
import './index.scss';
// import data from '../../../helpers/constants';
import {getPeopleInProject, getgroups, getProjectPeople, searchIsuue} from '../../../api/apiCalls';

const Dashboard = ({ project }) => {
    const [s_Project, setS_Project] = useState({});
    const [people,setPeople] = useState([]);
    const [issue,setIssue] = useState({});

    useEffect(() => {
        if (Array.isArray(project) && project.length > 0) {
            setS_Project(project[0]);
            getPeopleList();
            getIssueList(project[0]);
            
        }
    }, [project])

    useEffect(()=>{
        getPeopleList();
        getIssueList(s_Project);
    },[s_Project])

    const getPeopleList = ()=>{
        getProjectPeople(s_Project.id).then((data)=>{
            setPeople(data)
        })
    }

    const getIssueList = (project) =>{
        searchIsuue(project).then((data)=>{
            setIssue(data);
        });
    }

    return (
        <div className="main-div"> 
            <div className="container-head container-fluid">
                <div className="row">
                    <div className="col-md-9">
                       <h3>Planning Poker</h3>
                    </div> 
                    {
                        Array.isArray(project) && project.length > 0 &&
                        <div className="col-md-3 text-right">Select Story Bucket: 
                            <select defaultValue={s_Project.name} onChange={(event) => { setS_Project(project[event.target.value]) }}>
                                {project.map((data, i) => <option value={i}>{data.name}</option>)}
                            </select>
                        </div>
                    }
                </div>
            </div>
            <div className="container-stories container-fluid">
                <div className="row">
                    {issue && issue.issues && <StoriesList data={issue.issues || []}/>}
                    <PeopleList data={people}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;