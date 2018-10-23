import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';

import LandingPage from './containers/landing_page';
import Nav from './components/nav';
import About from './containers/about_page';
import Projects from './containers/projects_page';
import ProjectInfo from './containers/project_info_page';
import Contact from './containers/contact_page';

// <Route path="/projects/:projectid" component= { ProjectInfo } />

class App extends Component {
  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route component={ Nav } />
        </Switch>
        <div className="content">
          <Route path="/about" component={ About } />
          <Route exact path="/projects" component={ Projects } />
          <Route path="/projects/:projectid" component= { ProjectInfo } />
          <Route path="/contact" component={ Contact } />
        </div>
      </div>
    );
  }
}

export default App;
