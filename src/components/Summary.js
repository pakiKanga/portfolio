import React, { Component } from "react";
import "./../css/summary.css";
import logo from "./../images/usyd.jpg";
import Typed from 'typed.js';

import * as Scroll from 'react-scroll';

// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
var scroller = Scroll.scroller;


class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledDown: false
    }
    this.projectLinkRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }


  handleScroll(event) {
    const window = event.currentTarget;
    if (this.prev > window.scrollY) {
      console.log("scrolling up");
      if (this.state.scrolledDown) {
        this.setState({scrolledDown: false});
        this.scrollToTop();
      }
  } else if (this.prev < window.scrollY) {
      if (!this.state.scrolledDown) {
        this.setState({scrolledDown: true})
        this.scrollDown();
      }

  }
  this.prev = window.scrollY;

    console.log(window);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  scrollDown = () => {
    scroller.scrollTo('featured-projects', {
      duration: 1500,
      delay: 100,
      smooth: true,
    })
  }
  componentDidMount() {
    this.prev = window.scrollY;
    // window.addEventListener('scroll', e => this.handleScroll(e));

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
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const summaryList = this.props.flipped ? (
      <ul className="summary-list" ref={this.summaryRef}>
      <li className="animated bounceInLeft delay-1s faster">Design.</li>
      <li className="animated bounceInLeft delay-1s fast">DevOps.</li>
      <li className="animated bounceInLeft delay-1s slow">Front End.</li>
      <li className="animated bounceInLeft delay-1s slower">Back End.</li>
      </ul>
    )
    : (<span>Flip Me</span>)

    return (
      <div className="summary-container" style={{display: this.props.flipped ? '' : 'none'}}>
        <div className="summary-intro">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>

        <div className="summary-content">
          {summaryList}

        </div>

        <div className="bottom-container">
          <a href="#" onClick={this.scrollDown}><i className="fas fa-chevron-down scroll-down-icon" /></a>

       </div>

      </div>
    );
  }
}

export default Summary;
