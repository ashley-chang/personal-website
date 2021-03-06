import React from 'react';
import { Link } from 'react-router-dom';


const ProjectSquare = (props) => {
  //receives a project [Object]
  let path = `/projects/${props.project.id}`;
  return (
    <div className="project-square">
      <Link to={ path }>
        <img className="project-square__image" src={props.project.img} alt={props.project.title} />
        <div className="project-square__title">{props.project.title}</div>
        <Link className="project-square__link" to={ path }>view project</Link>
      </Link>
    </div>
  );
}

export default ProjectSquare;
