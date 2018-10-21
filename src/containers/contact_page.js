import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2 className="container-title" data-num='003'>Contact</h2>
        <p>For further inquiries, please contact me at <a className="emphasis" href="mailto:ashleychang96@gmail.com">ashleychang96@gmail.com.</a></p>
        <b>Links</b>
        <ul className="links">
          <li><a href="public/data/AshleyChangResumetechnical-temp.pdf" download>Resume</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    );
  }
}

export default Contact;
