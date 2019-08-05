import React, { Component } from "react";
import "./../css/contact.css";
import Projects from "./Projects";
import Summary from "./Summary";

class Card extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.mainRef = React.createRef();
    this.cardBack = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.state = {
      flipped: false
    };
  }

  handleClick() {
    const container = this.cardRef.current;
    const mainRef = this.mainRef.current;
    const cardBackRef = this.cardBack.current;


      container.classList.toggle("flipped");
      container.classList.toggle("unflipped");
      container.classList.toggle("full-screen");
      mainRef.classList.toggle("filled");
      cardBackRef.classList.toggle("table-toggle");
      this.setState({ flipped: true });
    
    console.log(this.cardRef.current.getBoundingClientRect());
  }

  flipCard() {
      this.setState({flipped: false});
      console.log("flipped set to false");
  }
  render() {
    const showProjects = this.state.flipped ? <Projects /> : "";
    return (
      <div
        className="flip-card card-container "
        ref={this.mainRef}
      >
        <div className="flip-card-inner unflipped shadow" ref={this.cardRef}>
          <div className="flip-card-front shadow" onClick={this.handleClick}> 
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
              <span className="email">
                {" "}
                <a href="mailto:ali.shaikh@sydney.edu.au">
                  <i class="fas fa-envelope contact-icon" />
                </a>
              </span>

              <span className="linkedin">
                <a href="https://www.linkedin.com/in/shaikhspeare/">
                  <i className="fab fa-linkedin contact-icon" />
                </a>
              </span>
            </div>
          </div>
          <div className="flip-card-back" ref={this.cardBack}>
            <Summary />

            <p className="featured-projects">FEATURED PROJECTS</p>
            {showProjects}
            <div className="return-home" onClick={this.handleClick}>
              <i class="fas fa-chevron-circle-left contact-icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
