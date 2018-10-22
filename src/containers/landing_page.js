import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LandingPage extends Component {
  render() {
    return (
      <Link to="/about" className="landing-page">
          <div className="landing-page-logo index-logo">Ashley Chang</div>
          <div className="landing-page-enter">click anywhere to enter</div>
      </Link>
    )
  }
}

export default LandingPage;
