import React, { Component } from "react";
import logo from "./logo.svg";

import "./styles/App.css";
import "./styles/player.css";

import Learnplayer from "./components/learnplayer/";
import Translator from "./components/translator/";

import lectionEdit from './data/latin1';

let Comp = null;

Comp = (
  <Translator lection={lectionEdit} text="Agricola sum et hodie in oppidum venio. Ibi Juliam expecto. Subito Marcus amicus appropinquat et rogat: 'Ubi Julia est?' Clamo: 'Non scio.' Subito Julia properat et clamat: 'Imperator venit.' Itaque populus clamat: 'Ave, Imperator!' Imperator agricolas multos in oppido esse scit et clamat: 'Servos multos habeo et populum rego.' Bonus est, itaque populus beatus est. Servi quoque beati sunt. Populi multi in oppido vivunt et vita in oppido magno bona est." />
);

Comp = <Learnplayer />;
class App extends Component {
  render() {
    return (
      <div className="App">
        {Comp}
      </div>
    );
  }
}

export default App;
