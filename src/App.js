import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, } from 'react-router-dom';
import PlanningPoker from './pages/planning-pocker/Dashboard';
import constants from './helpers/constants';
import {getAuth, getUserData , getAllProject,getAccessableResource} from './api/apiCalls';
import './App.css';

function App() {
  const [ project , setProject ] = useState('');
  const history = createBrowserHistory();
  const auth_token = localStorage.getItem('auth_token');
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const code = params.get('code');
  useEffect(()=>{
    if (!auth_token && !code) {
      window.location.href = constants.REST_API_authorization_URL;
    } else{
      if(!auth_token || auth_token == 'undefined'){
        getAuth(code).then(()=>{
          getUserData();
          getAccessableResource().then(()=>{
            getAllProject();
          });
        })
      } else{
        let user_data = localStorage.getItem('user_details')
        if(!user_data || user_data == 'undefined'){
          getUserData();
          getAccessableResource().then(()=>{
            getAllProject().then((project)=>{
              setProject(project);
            });
          });
        } else {
          getAllProject().then((project)=>{
            setProject(project);
          });
        }
      }
    }
  },[])
  
  return (
    <BrowserRouter history={history}>
      <Route path="/" component={() => <PlanningPoker project={project}/>} />
    </BrowserRouter>
  )
}

export default App;
