import React, { Component } from 'react';
import heyFam from './../images/HeyFam.PNG';
import mPoint from './../images/MeetupPoint.PNG';
import './../css/project.css'
import portfolio_data from '../data/portfolio.json'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: "HeyFam"
    }
    this.setCurrentProject = this.setCurrentProject.bind(this);

  }

  setCurrentProject(project, e) {
    e.preventDefault();
    this.setState({currentProject: project});
    console.log(project);
  }

  render() {
    const projectList = portfolio_data.map((project) =>
      <a className="project-link" href="#" onClick={(e) => this.setCurrentProject(project.projectName, e)}>
        <li id={project.projectName} className="project-decoration">{project.projectName}</li>
      </a>
    
    );

  for (var i = 0; i < portfolio_data.length; i++) {
    if (portfolio_data[i].projectName == this.state.currentProject) {
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
          <div className="project-bottom-bar">
            <span className="text-muted">{portfolio_data[i].tech}</span>
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
