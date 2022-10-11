import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <div>
        <nav>
              <ul>
                <li>
                </li>
                  <Link to="/">Home</Link>
                <li>
                  <Link to="/about">About Me</Link>
                
                </li>
                <li>
                  <Link to="/lessons-learned">Lessons Learned</Link>
                </li>
								<li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
      </div>
    );
  }
}

export default Header;
