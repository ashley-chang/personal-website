import React from 'react';

const Links = props => {
  //props: label, links [Object Array]
  let links = props.links.map((link)=> {
    return <li key={link.text}><a href={link.href}>{link.text}</a></li>  
  });
  return (
    <div className="links">
      <b>{props.label}</b>
      <ul>
        {links}
      </ul>
    </div>
  );
}

export default Links;
