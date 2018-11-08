import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import ProjectData from '../data/project_data';
import Links from '../components/links';

library.add(faAngleLeft);

class ProjectInfo extends Component {
  //Get the project id through the link parameter.
  constructor(props) {
    super(props);
    this.getProject = this.getProject.bind(this);
    this.makeToolsList = this.makeToolsList.bind(this);
    this.state = {
      project: this.getProject(this.props.match.params.projectid)
    }
  }

  getProject(projectId) {
    //get match params
    const project = ProjectData.find((project) => project.id === projectId );
    return project;
  }

  makeToolsList(toolArr) {
    let str = '';
    for (let tool of toolArr) {
      if (tool !== toolArr[toolArr.length-1]) {
        str += tool + ', ';
      } else {
        str += tool;
      }
    }
    return str;
  }

  render() {
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
          <div className="project-info-page__img">
            <img src={this.state.project.img} alt={this.state.project.title}/>
          </div>
          <div className="project-info-page__about">
            <span>About this project</span>
            <p className="project-info-page__desc">{this.state.project.desc}</p>
            <p className="project-info-page__comment">{this.state.project.comment}</p>
            <p className="project-info-page__tools">
            <span>Tools</span>
            {this.makeToolsList(this.state.project.tools)}</p>
            <Links label="Project Links" links={this.state.project.links}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectInfo;


// <h2 className="container-title">{this.props.project.title}</h2>
//   <Links label="Project Links" links={this.props.project.links}/>
