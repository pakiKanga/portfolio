import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
      <div className="summary-container">
        <p className="summary-intro">Hi, Im Ali. </p>
        <p className="content">I am a software engineer and graphic designer.</p>

        <p className="current-occupation">
        <strong>Currently: </strong> University of Sydney (Software Developer Intern)</p> 
      </div>
    );
  }
}

export default Summary;
