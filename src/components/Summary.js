import React, { Component } from 'react';
import './../css/summary.css'

class Summary extends Component {
  render() {
    return (
      <div className="summary-container">
        <h1 className="summary-intro">Hi, I'm Ali. </h1>
        <h2 className="content">I am a <strong>software engineer</strong> and this is my internet home, since real homes are so expensive these days.</h2>

        <h3 className="current-occupation">
        <strong>Currently: </strong> University of Sydney (Software Developer Intern)</h3>
      </div>
    );
  }
}

export default Summary;
