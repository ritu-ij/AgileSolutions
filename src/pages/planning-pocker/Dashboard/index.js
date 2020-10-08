import React, { useEffect, useState } from 'react';
import Search from '../../../components/Search';
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
        getPeopleInProject(s_Project.id).then((data)=>{
            console.log(data);
        })
        getgroups();
    },[s_Project])


    const getiisue=  ()=>{
        getgroups().then((data)=>{
            console.log(data);
        })
    }

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
            {
                Array.isArray(project) && project.length > 0 &&
                <div>selcted project:
                    <select defaultValue={s_Project.name} onChange={(event) => { setS_Project(project[event.target.value]) }}>
                        {project.map((data, i) => <option value={i}>{data.name}</option>)}
                    </select>
                </div>
            }
            <button onClick={getiisue}>get issue</button>
            <button onClick={getPeopleList}>get project details</button>

            <div className="container-search">
                <h3>Agile Agents</h3><Search />
            </div>
            <div className="container-stories">
               {issue && issue.issues && <StoriesList data={issue.issues || []}/>}
                <PeopleList data={people}/>
            </div>
        </div>
    );
}

export default Dashboard;