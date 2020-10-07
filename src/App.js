import React from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter, Route, } from 'react-router-dom';
//import PlanningPoker from './pages/planning-poker';
import RetrospectiveDashboard from './pages/retrospective/Dashboard';
import RetrospectiveNew from './pages/retrospective/New';
import RetroRoom from './pages/retrospective/Room';
import RetroContent from './content.json';
import './App.css';

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      {/* <Route path="/" component={PlanningPoker} /> */}
      <Route exact path='/' render={(props) => (<RetrospectiveDashboard {...props} content={RetroContent} />)} />
      <Route exact path='/Retrospective/Session/:id' render={(props) => (<RetrospectiveNew {...props} content={RetroContent} />)} />
      <Route exact path='/Retrospective/Room/:id' render={(props) => (<RetroRoom {...props} content={RetroContent} />)} />
      <Route exact path='/Retrospective/Dashboard' render={(props) => (<RetrospectiveDashboard {...props} content={RetroContent} />)} />
    </BrowserRouter>
  )
}

export default App;
