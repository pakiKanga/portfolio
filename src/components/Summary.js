import React, { Component } from "react";
import "./../css/summary.css";
import logo from "./../images/usyd.jpg";
class Summary extends Component {
  render() {
    return (
      <div className="summary-container">
        <div className="summary-intro">
          <span>Hi, I'm Ali. </span>
        </div>

        <div className="summary-content">
          <span>
            I'm a software engineer with strong roots in design.
          </span>
        </div>

        <div className="current-occupation">
          <span>
            <strong>Currently: </strong> University of Sydney (Software
            Developer){" "}
          </span> <br></br>
          <img className="logo" src={logo} />

        </div>

      </div>
    );
  }
}

export default Summary;
