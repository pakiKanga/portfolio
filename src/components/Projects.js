import React, { Component } from 'react';
import heyFam from './../images/HeyFam.PNG';
import mPoint from './../images/MeetupPoint.PNG';
import './../css/project.css'
import portfolio_data from '../data/portfolio.json'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: "heyFam"
    }
    this.setCurrentProject = this.setCurrentProject.bind(this);

  }

  setCurrentProject(currentProject) {
    console.log(currentProject);
  }

  render() {
    const projectList = portfolio_data.map((project) =>
      <div className="project-link" onClick={this.setCurrentProject(project.projectName)}>
        <li className="project-decoration">{project.projectName}</li>
      </div>
    
    );

  for (var i = 0; i < portfolio_data.length; i++) {
    console.log(portfolio_data[i].projectName)
    if (portfolio_data[i].projectName == "HeyFam") {
      var currentProject = 
        <div className="current-project">
          <div className="project-top-bar">
            <h3 className="project-heading">{portfolio_data[i].projectName}</h3>
          </div>

          <div className="project-summary">
            <div className="project-info-container">
              <p className="project-info">
                {portfolio_data[i].summary}
              </p>
            </div>
          </div>
        </div>
    }
  }
    return (
      <div className="projects-container">

        <div className="projects-header">
          <span>Featured Projects</span>
        </div>
        <div className="projects-content">
          <div className="sidebar">
            <ul className="sidebar-projects">
              {projectList}
            </ul>
          </div>
          
          {currentProject}
         
        </div>

      </div>
    );
  }
}

export default Projects;
