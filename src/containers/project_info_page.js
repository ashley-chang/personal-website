import React, { Component } from 'react';

import Links from '../components/links';

import ProjectData from '../data/project_data';

class ProjectInfo extends Component {
  //Get an individual project through the props. ??????
  //props.project
  //contains: id, title, description, comment, tools [Array], links [Object Array]

  constructor(props) {
    super(props);
    this.getProject = this.getProject.bind(this);
    this.setProject = this.setProject.bind(this);
    this.state = {
      project: this.getProject(this.props.match.params.projectid)
    }
  }

  setProject(projectObj) {
    let thisProject = this.getProjectInfo(this.props.match.params.projectid);
    console.log("component did mount" + thisProject);
    this.setState({
      project: thisProject
    });
  }

  getProject(projectId) {
    //get match params
    const project = ProjectData.find((project) => project.id === projectId );
    console.log(project);
    return project;
  }

  render() {
    console.log(this.props.match);
    return (
      <div>
        <h2 className="container-title">{this.state.project.title}</h2>
      </div>
    );
  }
}

export default ProjectInfo;


// <h2 className="container-title">{this.props.project.title}</h2>
//   <Links label="Project Links" links={this.props.project.links}/>
