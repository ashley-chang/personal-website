import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2 className="container-title" data-num='001'>About</h2>
        <p>Hello! My name is <span className="emphasis">Ashley Chang</span>. I recently
        graduated from the <span className="emphasis">University of California, Los Angeles
         (UCLA)</span>&nbsp;with a B.A. in <span className="emphasis">Linguistics & Computer
        Science</span>&nbsp;and a minor in <span className="emphasis">East Asian Languages
        and Cultures</span>&nbsp;with a focus in Japanese.
        </p>
        <p>
        I am currently based in Orange County/Los Angeles. My passions lie in integrating
        creativity with science and logic--which is why I specialize
        in <span className="emphasis">front-end development</span>.
        </p>
        <p>
        My previous experiences include Web Assistant at the
        UCLA Lewis Center for Regional Policy Policy Studies/Institute of Transportation
        Studies (2017-2018), as well as Front-End Web Development Intern at Pro-Lite, Inc. (2017).
        </p>
        <p>
        In my free time, you can find me baking cheesecakes or drawing up a storm.
        </p>
      </div>
    );
  }

}

export default About;
