import React, { Component } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SourceIcon from "@mui/icons-material/Source";

class Header extends Component {
  render() {
    return (
      <Stack className="App-header">
        <nav className="nav-link">
          <div className="App-logo">
            <ArrowBackIosIcon />
            <h1>Hildelio</h1>
            <ArrowForwardIosIcon />
          </div>

          <ul>
            <li>
              <Button variant="text">
                <SourceIcon />
                <Link to="/" className="link">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="text">
                <SourceIcon />
                <Link to="/about" className="link">About Me</Link>
              </Button>
            </li>
            <li>
              <Button variant="text">
                <SourceIcon />
                <Link to="/lessons-learned" className="link">Lessons Learned</Link>
              </Button>
            </li>
            <li>
              <Button variant="text">
                <SourceIcon />
                <Link to="/projects" className="link">Projects</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </Stack>
    );
  }
}

export default Header;
