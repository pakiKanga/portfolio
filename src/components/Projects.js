import React, { Component } from 'react';
import heyFam from './../images/HeyFam.PNG';
import mPoint from './../images/MeetupPoint.PNG';
import './../css/project.css'
import ReactJson from 'react-json-view'
import portfolio_data from '../data/portfolio.json'

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projectItems = portfolio_data.map((project) =>
      <div className="project">

        <div className="project-top-bar">
          <h3 className="project-heading">{project.projectName}</h3>
        </div>
        <div className="image-container">
        </div>

        <div className="project-summary">

          <div className="project-info-container">
            <p className="project-info">
              {project.summary}
            </p>
            <div className="project-bottom-bar">
              <span className="text-muted">{project.tech}</span>
            </div>
          </div>
        </div>
    </div>
  );
    return (
      <div className="projects-container">

        <div className="projects-header">
          <span>Featured Projects - </span>
        </div>
        <div className="projects-content">
          {projectItems}
        </div>
      </div>
    );
  }
}

export default Projects;
