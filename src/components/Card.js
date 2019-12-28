import React, { Component } from "react";
import "./../css/contact.css";

import Projects from "./Projects";
import Summary from "./Summary";
import ContactInfo from "./ContactInfo";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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

  componentDidMount() {
    const container = this.cardRef.current;
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

    return (
      <div>
        <div>
          <Summary />
          <div name="featured-projects">
            <p className="featured-projects">FEATURED PROJECTS</p>
            <Projects />

            <ContactInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
