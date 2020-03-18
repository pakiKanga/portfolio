import React, { Component } from "react";
import Card from "./components/Card.js";
import ContactInfo from "./components/ContactInfo";
import Projects from "./components/Projects";
import Summary from "./components/Summary";

import logo from "./logo.svg";
import card from "./images/businesscard.svg";
import "./App.css";
import "./css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="top-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,32L48,32C96,32,192,32,288,32C384,32,480,32,576,32C672,32,768,32,864,64C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <Summary />
        <div name="featured-projects">
          <Projects />

          <ContactInfo />
        </div>
      </>
    );
  }
}

export default App;
