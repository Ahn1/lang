import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Learnplayer from './components/learnplayer/'
import Translator from './components/translator/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Learnplayer />
        <hr />
        <Translator text="Hallo my name is Alexander. I am 23 years old and i try to create an application for learning languages." />
      </div>
    );
  }
}

export default App;
