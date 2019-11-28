import React, { Component } from 'react';
import './../css/project.css'
import portfolio_data from '../data/portfolio.json'
import ProjectCard from './ProjectCard.js'

class Projects extends Component {
  constructor(props) {
    super(props);
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

        <div className="bottom-wave">
          Bottom wavee
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,133.3C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          </div>


      </div>
    );
  }
}

export default Projects;
