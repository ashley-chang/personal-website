import React from 'react';

const ProjectSquare (props) => {
  return (
    <div className="project-square">
      <img src={props.img}/>
      <div className="project-title">{props.title}</div>
      <p className="project-desc">{props.desc}</p>
    </div>
  );
}

export default ProjectSquare;
