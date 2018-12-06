import React, { Component } from 'react';
import heyFam from './../images/HeyFam.PNG';
import mPoint from './../images/MeetupPoint.PNG';
import './../css/project.css'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {id: 1, projectName: "HeyFam", summary: "Sed eget dapibus lectus, eu sodales mi. In varius dapibus nibh, id faucibus diam dictum quis. Vestibulum eu mollis mauris. Nunc convallis elementum urna vitae tempor. In in mattis diam, vitae porttitor metus. Sed sit amet tincidunt turpis, vel scelerisque erat. Nunc turpis metus, sodales ac posuere iaculis, dignissim et diam. Curabitur malesuada et arcu vitae luctus. Aliquam erat volutpat. Quisque vel euismod augue. Ut non mauris nec lectus facilisis eleifend. Etiam ornare mi a ante convallis iaculis. Fusce dictum blandit venenatis. Duis vestibulum est feugiat risus fermentum, in tempor nibh semper. Suspendisse potenti.        ", tech: "Materialise | Flask | MySQL", image: heyFam},
        {id: 2, projectName: "Meetup Point", summary: "Find the most convenient place to meet up", tech: "React | Node | MySQL", image: mPoint},
        {id: 3, projectName: "SpaceCraft VR", summary: "Find the most convenient place to meet up", tech: "Unreal Engine"},
        {id: 4, projectName: "Application Verification System", summary: "Applicants can fill and submit forms which are administrated by different tiers of administration, for the Pakistani Consulate.", tech: "Materialise | Flask | MySQL"},
        {id: 5, projectName: "This Portfolio", summary: "Easy to maintain portfolio, I only need to update a JSON file which is read in through React and respectively renders each component.", tech: "React | Bootstrap"}

      ]
    }
  }

  render() {
    const projectItems = this.state.projects.map((project) =>
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
