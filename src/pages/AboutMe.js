import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="topo">
          <div>
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/106602737?v=4"
              alt="avatar"
            />
          </div>
          <div className="TituloSub">
            <h1>Hildélio Júnior</h1>

            <h2>A Web Developer from Brazil</h2>
          </div>
        </div>

        <ul>
          <li>🏡 Salvador - Brazil</li>

          <li>
            📚 I'm studying web development at
            <a href="https://www.betrybe.com/">Trybe</a>
          </li>

          <li>
            🌱 I'm learning React 
          </li>

          <li>
            📫 How to reach me
            <a href="mailto:hildelio@gmail.com">hildelio@gmail.com</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
