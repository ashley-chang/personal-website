import React from 'react';
import { Link } from 'react-router-dom';

//<Link to="/path">Hello</Link>

const ProjectSquare = (props) => {
  //receives a project [Object]
  let excerpt = props.project.description ? props.project.description.substring(0, 80) : "";
  let desc;
  // if (props.desc.length >= 100) {
  //   desc = <p className="project-square__desc">{props.desc}...more</p>
  // } else {
  //   desc = <p className="project-square__desc">{props.desc}</p>
  // }
  // <img className="project-square__image" src={ require (`${props.project.img}`)} />
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
