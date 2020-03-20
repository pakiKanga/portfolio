import React, { Component } from "react";
import ContactInfo from "./components/ContactInfo";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import About from "./components/About";
import "./App.css";
import "./css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <>

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
