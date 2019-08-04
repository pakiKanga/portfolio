import React, { Component } from 'react';
import Projects from './components/Projects';
import Header from './components/Header';
import Summary from './components/Summary';
import ContactInfo from './components/ContactInfo';
import Jobs from './components/Jobs';
import Card from './components/Card.js'


import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
