import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);
library.add(faBars);

const NavButton = props => {
  let button;
  if (props.visible) {
    button = <FontAwesomeIcon icon="times" onClick={props.onClick} />
  } else {
    button = <FontAwesomeIcon icon="bars" onClick={props.onClick} />
  }

  return (
    <div className="nav-button">
      { button }
    </div>
  )
}

export default NavButton;
