import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import LessonsLearned from "../pages/LessonsLearned";
import Projects from "../pages/Projects";
import Error from "../pages/Error";

class Content extends Component {
  render() {
    return (
      <div className="App-content">
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/lessons-learned" component={LessonsLearned} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/portfolio" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default Content;
