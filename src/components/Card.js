import React, { Component } from "react";
import "./../css/contact.css";
import Projects from './Projects';
 
class Card extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.mainRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      flipped: false
    };
  }

  handleClick() {
    const container = this.cardRef.current;
    const mainRef = this.mainRef.current;

    if (!this.state.flipped) {
      container.classList.toggle("flipped");
      container.classList.toggle("unflipped");
      container.classList.toggle("full-screen");
      mainRef.classList.toggle("filled");
    }
    this.setState({ flipped: true });
  }
  render() {
    return (
      <div
        className="flip-card card-container "
        ref={this.mainRef}
        onClick={this.handleClick}
      >
        <div className="flip-card-inner unflipped shadow" ref={this.cardRef}>
          <div className="flip-card-front shadow">
            <div className="job-title">
              <span>Full Stack Software Engineer</span>
            </div>

            <div className="name-header">
              <span>Ali Shaikh</span>
            </div>

            <div className="caption">
              <span>
                "A jack of all trades is a master of none, but oftentimes better
                than a master of one".
              </span>
            </div>

            <div className="bottom-section">
              <span className="email">ali.shaikh@sydney.edu.au</span>

              <span className="linkedin">Linkedin</span>
            </div>
          </div>
          <div class="flip-card-back">
              
            <h1>It</h1>
            <p>PROJECTS</p>
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
