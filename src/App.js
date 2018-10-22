import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import './App.scss';

import LandingPage from './containers/landing_page';
import Nav from './components/nav';
import About from './containers/about_page';
import Projects from './containers/projects_page';
import Contact from './containers/contact_page';

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
          <Route path="/projects" component={ Projects } />
          <Route path="/contact" component={ Contact } />
        </div>
      </div>
    );
  }
}

export default App;
