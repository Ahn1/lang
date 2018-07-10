import React, { Component } from "react";
import logo from "./logo.svg";

import "./styles/App.css";
import "./styles/player.css";

import Learnplayer from "./components/learnplayer/";
import Translator from "./components/translator/";

class App extends Component {
  render() {
    return (
      <div className="App">
         <Learnplayer />
        <hr />{/**
        <Translator text="Hello my name is Alexander. I am 23 years old and i try to create an application for learning languages. But i seriously have problems finding a good looking styling approach. I need to find something better for that." />
**/}
      </div>
    );
  }
}

export default App;
