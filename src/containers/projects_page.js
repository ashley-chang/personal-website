import React, { Component } from 'react';
import ProjectData from '../data/project_data';
import ProjectSquare from '../components/project_square';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = ProjectData.map((project) => {
      return <ProjectSquare key={project.id} project={project}/>;
    });
  }

  render() {
    return (
      <div>
        <h2 className="container-title" data-num='002'>Projects</h2>
        <div className="projects">
          { this.projects }
        </div>
      </div>
    );
  }
}

export default Projects;
