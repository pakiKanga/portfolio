import React, { Component } from 'react';
import heyFam from './../images/HeyFam.PNG';
class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="projects-header">
          <span>Featured Projects</span>
        </div>
        <div className="projects-content">
          <div className="project">
            <div className="project-top-bar">
              <h3 className="project-heading">HeyFam</h3>
            </div>
            <div className="project-summary">
              <img align="left" src={heyFam} className="project-image">

              </img>
              <p className="project-info">
                Find the most optimal location to meet up with friends
                through a midpoint algorithm.
              </p>

              <div className="project-bottom-bar">
                <span className="text-muted">Flask | Materialise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
