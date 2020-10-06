import React from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter, Route, } from 'react-router-dom';
//import PlanningPoker from './pages/planning-poker';
import RetrospectiveDashboard from './pages/retrospective/Dashboard';
import RetrospectiveNew from './pages/retrospective/New';
import RetroContent from './content.json';
import './App.css';

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      {/* <Route path="/" component={PlanningPoker} /> */}
      {/* <Route path='/' render={(props) => (<Retrospective {...props} content={RetroContent} />)} /> */}
      <Route path='/Retrospective/Session/:id' render={(props) => (<RetrospectiveNew {...props} content={RetroContent} />)} />
      <Route path='/Retrospective/Dashboard' render={(props) => (<RetrospectiveDashboard {...props} content={RetroContent} />)} />
    </BrowserRouter>
  )
}

export default App;
