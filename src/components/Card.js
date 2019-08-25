import React, { Component } from "react";
import "./../css/contact.css";


import Projects from "./Projects";
import Summary from "./Summary";
import ContactInfo from "./ContactInfo"
class Card extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.mainRef = React.createRef();
    this.cardBack = React.createRef();
    this.flipBackward = this.flipBackward.bind(this);
    this.flipForward = this.flipForward.bind(this);
    this.state = {
      flipped: false
    };
  }

  flipBackward() {
    const container = this.cardRef.current;
    const mainRef = this.mainRef.current;
    const cardBackRef = this.cardBack.current;
    container.classList.toggle("flipped");
    container.classList.toggle("unflipped");
    container.classList.toggle("full-screen");
    mainRef.classList.toggle("filled");
    cardBackRef.classList.toggle("table-toggle");
    this.setState({ flipped: false });
  }

  flipForward() {
    const container = this.cardRef.current;
    const mainRef = this.mainRef.current;
    const cardBackRef = this.cardBack.current;
    container.classList.toggle("flipped");
    container.classList.toggle("unflipped");
    container.classList.toggle("full-screen");
    mainRef.classList.toggle("filled");
    cardBackRef.classList.toggle("table-toggle");
    this.setState({ flipped: true });
  }
  render() {
    console.log(this.state.flipped);
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    if (isIE) {
      return (
        <div>
          <div className="IEContent">
            <Summary />
            <div>
              <p className="featured-projects align-center">FEATURED PROJECTS</p>
              <h4 className="align-center"><strong>Note: This website is not compatible with IE. Please use Chrome, Safari or Firefox!</strong></h4>

              <Projects />
              <ContactInfo />

            </div>
          </div>
        </div>
      );
    }
    const showProjects = this.state.flipped ? (
      <div>
        <p className="featured-projects">FEATURED PROJECTS</p>
        <Projects />
        <div className="return-home" onClick={this.flipBackward}>
          <i class="fas fa-chevron-circle-left contact-icon" />
        </div>
        <ContactInfo />

      </div>
    ) : (
      ""
    );

    const tapIndicator = this.state.flipped ? (
      ""
    ) : (
      <div className="tap-indicator">
      <span>Tap Me</span>
      </div>
    );
    return (
      <div className="flip-card card-container cbutton cbutton--effect-tamara" ref={this.mainRef}>
        <div className="flip-card-inner unflipped " ref={this.cardRef}>
          <div className="flip-card-front shadow" onClick={this.flipForward}>
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
                <a href="mailto:ali.shaikh@sydney.edu.au" target="_blank">
                  <i className="fas fa-envelope contact-icon" />
                </a>
              </span>

              <span className="linkedin">
                <a
                  href="https://www.linkedin.com/in/shaikhspeare/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin contact-icon" />
                </a>
              </span>
            </div>
          </div>
          <div className="flip-card-back" ref={this.cardBack}>
          <svg className="waves"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,197.3C480,213,600,203,720,165.3C840,128,960,64,1080,42.7C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
            <Summary />
            {showProjects}
          </div>
        </div>
          {tapIndicator}

      </div>
    );
  }
}

export default Card;
