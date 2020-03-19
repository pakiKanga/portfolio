import React, { Component } from "react";
import "./../css/project.css";
import portfolio_data from '../data/portfolio.json';
import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';


class Projects extends Component {

  render() {

    const projectList = portfolio_data.map((project) => 
       <ProjectCard name={project.projectName} tech={project.tech} description={project.summary} image={project.image} modalImages={project.modalImages} link={project.link} />
    )
    return (
        <div className="project-container">
        <h1 className="featured-projects-header">
        <Fade left big>FEATURED PROJECTS</Fade>
          </h1>
          <Fade bottom >
          {projectList}
          </Fade>
        </div>
    );
  }
}

export default Projects;
