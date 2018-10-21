import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import Nav from './components/nav';
import About from './containers/about_page';
import Projects from './containers/projects_page';
import Contact from './containers/contact_page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
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
