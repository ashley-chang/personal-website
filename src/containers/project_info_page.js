import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import ProjectData from '../data/project_data';


library.add(faAngleLeft);

// import Links from '../components/links';

class ProjectInfo extends Component {
  //Get the project id through the link parameter.
  constructor(props) {
    super(props);
    this.getProject = this.getProject.bind(this);
    this.state = {
      project: this.getProject(this.props.match.params.projectid)
    }
  }

  getProject(projectId) {
    //get match params
    const project = ProjectData.find((project) => project.id === projectId );
    return project;
  }

  render() {
    console.log(this.state.project.img);
    return (
      <div>
        <div className="project-info-page__top">
            <Link to="/projects" className="project-info-page__back-link">
              <FontAwesomeIcon icon="angle-left" />
              Back to Projects
            </Link>
          <h2 className="project-info-page__container-title">{this.state.project.title}</h2>
        </div>
        <div className="project-info-page__body">
          <img className="project-info-page__img" src={this.state.project.img}/>
          <div className="project-info-page__about">
            <h4>About this project</h4>
            <p>{this.state.project.desc}</p>
            <p>{this.state.project.comment}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectInfo;


// <h2 className="container-title">{this.props.project.title}</h2>
//   <Links label="Project Links" links={this.props.project.links}/>
