import React, { Component } from "react";
import "./../css/summary.css";
import logo from "./../images/usyd.jpg";
import Typed from 'typed.js';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.summaryRef = React.createRef();
  }

  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const strings  = ["Hi, I'm Ali", "I'm a software engineer."];
    console.log(strings);
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    };
    // this.el refers to the <span> in the render() method
    console.log(this.el);
    this.typed = new Typed(this.el, options);
    const summary = this.summaryRef.current;
    summary.classList.toggle("animated");
    summary.classList.toggle("bounceInLeft");

    // const summary = this.summaryRef.current.childNodes;
    // console.log(summary);
    // for (var i = 0; i < summary.length; i++) {
    //   summary[i].current.toggle("animated");
    //   summary[i].current.toggle("bounceInLeft");
      
    // }

  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="summary-container">
        <div className="summary-intro">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>

        <div className="summary-content">
          <ul className="summary-list" ref={this.summaryRef}>
            <li className="animated infinite bounceinLeft delay-2s">Design.</li>
            <li className="animated infinite bounceinLeft delay-2s">DevOps.</li>
            <li className="animated infinite bounceinLeft delay-2s">Front End.</li>
            <li className="animated infinite bounceinLeft delay-2s">Back End.</li>
          </ul>

        </div>

        <div className="current-occupation">
          <span>
            <strong>Currently: </strong> University of Sydney (Software
            Developer){" "}
          </span> <br></br>

        </div>

      </div>
    );
  }
}

export default Summary;
