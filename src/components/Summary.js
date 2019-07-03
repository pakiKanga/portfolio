import React, { Component } from 'react';
import './../css/summary.css'
class Summary extends Component {
  render() {
    return (
      <div className="summary-container">
        <h1 className="summary-intro">Hi, I'm Ali. </h1>
        <h2 className="content">I'm a software engineer. Here are some of the things that I've done so far.</h2>

        <h3 className="current-occupation">
        <strong>Currently: </strong> University of Sydney (Software Developer)</h3>

      </div>
    );
  }
}

export default Summary;
