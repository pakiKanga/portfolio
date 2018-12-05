import React, { Component } from 'react';
import heyFam from './../images/HeyFam.PNG';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {id: 1, projectName: "HeyFam", summary: "Find the most convenient place to meet up", tech: "Materialise | Flask | MySQL", image: heyFam},
        {id: 2, projectName: "Meetup Point", summary: "Find the most convenient place to meet up", tech: "React | Node | MySQL"},
        {id: 3, projectName: "SpaceCraft VR", summary: "Find the most convenient place to meet up", tech: "Unreal Engine"},
        {id: 4, projectName: "Application Verification System", summary: "Applicants can fill and submit forms which are administrated by different tiers of administration, for the Pakistani Consulate.", tech: "Materialise | Flask | MySQL"}

      ]
    }
  }

  render() {
    const projectItems = this.state.projects.map((project) =>
      <div className="project">
      <div className="project-top-bar">
        <h3 className="project-heading">{project.projectName}</h3>
      </div>

      <div className="project-summary">
        <div className="image-container">
          <img className="project-image" src={project.image}></img>
        </div>

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
