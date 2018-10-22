import React, { Component } from 'react';
import { Link } from "react-router-dom";

import NavButton from './nav_button';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.toggleNav = this.toggleNav.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      responsiveNav: window.innerWidth < 800
    });
    window.addEventListener('resize', () => {
        this.setState({
            responsiveNav: window.innerWidth < 800
        });
    }, false);
}

  toggleNav() {
    this.setState({
      visible: !this.state.visible
    });
  }

  clickHandler(e) {
    this.toggleNav();
    e.stopPropagation();
  }

  render() {
    let className;
    if (this.state.responsiveNav) {
      className = this.state.visible ? "nav show" : "nav hide";
    } else {
      className = "nav";
    }
    console.log(this.state.responsiveNav);
    return (
      <nav className={ className }>
        <NavButton visible={this.state.visible} onClick={this.clickHandler}/>
        <ul>
          <li>
            <Link to="/">
              <h1 className="index-logo">
                Ashley Chang
              </h1>
            </Link>
          </li>
          <li className="nav-item" onClick={this.clickHandler}>
            <div className="nav-item_slide">
              <Link to="/about">
                <span data-num="001">About</span>
              </Link>
            </div>
          </li>
          <li className="nav-item" onClick={this.clickHandler}>
            <div className="nav-item_slide">
              <Link to="/projects">
                <span data-num="002">Projects</span>
              </Link>
            </div>
          </li>
          <li className="nav-item" onClick={this.clickHandler}>
            <div className="nav-item_slide">
              <Link to="/contact">
                <span data-num="003">Contact</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
