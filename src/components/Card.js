import React, { Component } from "react";
import "./../css/contact.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const container = this.cardRef.current;
        
        container.classList.toggle('flipped');
        container.classList.toggle('unflipped');
        container.classList.toggle('full-screen');
        
    }
  render() {
    return (
      <div className="flip-card card-container" onClick={this.handleClick}>
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
          <div class="flip-card-back shadow">
      <h1>It</h1> 
      <p>WORKS</p> 
      <p>YEAAAAAAAAAAAAA</p>
    </div>
        </div>
      </div>
    );
  }
}

export default Card;
