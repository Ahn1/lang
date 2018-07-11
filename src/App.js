import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./styles/App.css";
import "./styles/player.css";

import Learnplayer from "./components/learnplayer/";
import Translator from "./components/translator/";

import lectionEdit from "./data/latin1";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{display: "flex",flexDirection: "column"}}>
          <div>
            <ul>
              <li>
                <Link to="/player">Player</Link>
              </li>
              <li>
                <Link to="/translator">Übersetzer</Link>
              </li>
            </ul>
          </div>

          <div style={{ width: "100%", flexGrow:"1", position: "relative" }}>
            <Switch>
              <Route path="/player" component={() => <Learnplayer />} />
              <Route
                path="/translator"
                component={() => (
                  <Translator
                    lection={lectionEdit}
                    text="Agricola sum et hodie in oppidum venio. Ibi Juliam expecto. Subito Marcus amicus appropinquat et rogat: 'Ubi Julia est?' Clamo: 'Non scio.' Subito Julia properat et clamat: 'Imperator venit.' Itaque populus clamat: 'Ave, Imperator!' Imperator agricolas multos in oppido esse scit et clamat: 'Servos multos habeo et populum rego.' Bonus est, itaque populus beatus est. Servi quoque beati sunt. Populi multi in oppido vivunt et vita in oppido magno bona est."
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
