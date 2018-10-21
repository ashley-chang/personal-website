import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li><a><h1 className="nav-index">Ashley Chang</h1></a></li>
        <li className="nav-item"><div className="nav-item_slide"><Link to="/about"><span data-num="001">About</span></Link></div></li>
        <li className="nav-item"><div className="nav-item_slide"><Link to="/projects"><span data-num="002">Projects</span></Link></div></li>
        <li className="nav-item"><div className="nav-item_slide"><Link to="/contact"><span data-num="003">Contact</span></Link></div></li>
      </ul>
    </nav>
  );
};

export default Nav;
