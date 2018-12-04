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
              <div className="image-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              </div>

              <div className="project-info-container">
                <p className="project-info">
                  Find the most optimal location to meet up with friends
                  through a midpoint algorithm. I should really sleep but
                  I am really bored. I need to add a craptonne of text to see
                  what happens.
                </p>
              </div>



              <div className="project-bottom-bar">
                <span className="text-muted">Flask | Materialise</span>
              </div>
            </div>
          </div>


          <div className="project">
            <div className="project-top-bar">
              <h3 className="project-heading">Meetup Point</h3>
            </div>

            <div className="project-summary">
              <div className="image-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              </div>

              <div className="project-info-container">
                <p className="project-info">
                  Find the most optimal location to meet up with friends
                  through a midpoint algorithm. I should really sleep but
                  I am really bored. I need to add a craptonne of text to see
                  what happens.
                </p>
              </div>



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
