import React, { Component } from "react";
import "./../css/summary.css";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

// Or Access Link,Element,etc as follows
let scroll = Scroll.animateScroll;
var scroller = Scroll.scroller;

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledDown: false
    };
    this.projectLinkRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    const window = event.currentTarget;
    if (this.prev > window.scrollY) {
      console.log("scrolling up");
      if (this.state.scrolledDown) {
        this.setState({ scrolledDown: false });
        this.scrollToTop();
      }
    } else if (this.prev < window.scrollY) {
      if (!this.state.scrolledDown) {
        this.setState({ scrolledDown: true });
        this.scrollDown();
      }
    }
    this.prev = window.scrollY;
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  scrollDown = () => {
    scroller.scrollTo("featured-projects", {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };

  componentDidMount() {
    this.setState({mounted: true});
  }

  render() {
    return (
      <div className="summaryParentContainer">
        <div className="summary-container">
          <Fade top>
            <div className="summary-intro">
              Hi, I'm <span id="name">Ali Shaikh.</span> <br />
              I'm a full-stack software developer.
            </div>
          </Fade>
            <div className="imageContainer">
            <Fade right when={this.state.imageLoaded === true}>

              <img onLoad={() => this.setState({imageLoaded: true})} alt="" src={require("./wordcloud/res_9.png")} />
              </Fade>

            </div>
        </div>
        <div className="bottom-container">
          <a href="#" onClick={this.scrollDown}>
            <i className="fas fa-chevron-down scroll-down-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Summary;
