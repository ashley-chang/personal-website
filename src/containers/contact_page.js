import React, { Component } from 'react';
import Links from '../components/links';

class Contact extends Component {
  constructor (props) {
    super(props);
    this.contactLinks = [
      {
          text: "Github",
          href: "https://github.com/ashley-chang"
      }
    ];

  }
  render() {
    return (
      <div>
        <h2 className="container-title" data-num='003'>Contact</h2>
        <p>For further inquiries, please contact me at <a className="emphasis" href="mailto:ashleychang96@gmail.com">ashleychang96@gmail.com.</a></p>
        <Links label="Links" links={this.contactLinks}/>
      </div>
    );
  }
}

export default Contact;
