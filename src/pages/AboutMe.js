import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="App-aboutMe">
        <div className="topo">
          <div className="foto">
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
            📚 I'm studying analysis and systems development at {' '} 
            <a href="https://estacio.br/">Universidade Estácio de Sá</a>
            </li>

          <li>
            📚 I'm studying web development at{' '}
            <a href="https://www.betrybe.com/">Trybe</a>
          </li>

          <li>
            🌱 I'm learning React 
          </li>

          <li>
            📫 How to reach me{' '}
            <a href="mailto:hildelio@gmail.com">hildelio@gmail.com</a>
            <ul>
            <li>Connect with me:{' '}
          <a href="https://linkedin.com/in/hildelio" target="blank">
            <img
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="hildelio"
              height="20"
              width="20"
            />
          </a>
          </li>
            </ul>

          </li>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
