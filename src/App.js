import React, { Component } from 'react';
import Card from './components/Card.js'
import ContactInfo from './components/ContactInfo';


import logo from './logo.svg';
import card from './images/businesscard.svg'
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
