import React, { Component } from "react";
import "./../css/project.css";
import portfolio_data from '../data/portfolio.json';
import Zoom from 'react-reveal/Zoom';
import ProjectCard from './ProjectCard';


class Projects extends Component {

  render() {

    const projectList = portfolio_data.map((project) => 
       <ProjectCard name={project.projectName} tech={project.tech} description={project.summary} image={project.image} link={project.link} />
    )
    return (
        <div className="project-container">
        <h1 className="featured-projects-header">
        FEATURED PROJECTS
          </h1>

          {projectList}
        </div>
    );
  }
}

export default Projects;
