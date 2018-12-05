import React, { Component } from 'react';
import Projects from './components/Projects';
import Header from './components/Header';
import Summary from './components/Summary';

import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary />
        <Projects />
      </div>
    );
  }
}

export default App;
