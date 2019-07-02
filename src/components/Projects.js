import React, { Component } from 'react';
import './../css/project.css'
import portfolio_data from '../data/portfolio.json'
import ProjectCard from './ProjectCard.js'

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
      <div className="project">
        <ProjectCard name={project.projectName} tech={project.tech} description={project.summary} image={project.image} link={project.link} />    
      </div>
    );

    return (
      <div className="projects-container">
        {projectList}
      </div>
    );
  }
}

export default Projects;
