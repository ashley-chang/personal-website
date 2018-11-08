import React from 'react';

const Links = props => {
  //props: label, links [Object Array]
  let links = props.links.map((link)=> {
    return <li key={link.text}><a href={link.href} target="_blank">{link.text}</a></li>
  });
  return (
    <div className="links">
      <span className="links-label">{props.label}</span>
      <ul>
        {links}
      </ul>
    </div>
  );
}

export default Links;
