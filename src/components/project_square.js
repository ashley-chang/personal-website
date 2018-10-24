import React from 'react';
import { Link } from 'react-router-dom';


const ProjectSquare = (props) => {
  //receives a project [Object]
  let excerpt = props.project.desc ? props.project.desc.substring(0, 80) : "";
  let path = `/projects/${props.project.id}`;

  return (
    <div className="project-square">
      <img className="project-square__image" src={props.project.img} />
      <div className="project-square__title">{props.project.title}</div>
      <p className="project-square__desc">{excerpt}</p>
      <Link to={ path }>view project</Link>
    </div>
  );
}

export default ProjectSquare;
