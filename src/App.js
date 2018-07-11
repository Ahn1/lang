import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/App.css";
import "./styles/player.css";

import Navigation from "./components/Navigation";
import Index from "./components/contentindex/";
import Lectionloader from "./components/learnplayer/Lectionloader";
import Translator from "./components/translator/"
// https://de.wikibooks.org/wiki/Latein/_Anf%C3%A4ngerkurs/_Lektionen/_Lektion_19
class App extends Component {
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Navigation />
          <div
            style={{
              width: "100%",
              flexGrow: "1",
              display: "flex",
              alignItems: "stretch",
              alignContent: "stretch"
            }}
          >
            <Switch>
              <Route path="/lection/*" component={Lectionloader} />
              <Route path="/translator" component={() => <Translator text="Hannibal, cuius patria Carthago est, bellum adversus Romam gerit. Milites multi et animalia magna ei sunt, quae ex Africa sunt. Imperator Romanus magnam calamitatem sibi et populi metuit, quem regit. Is Hannibalem urbem Romam invadere credit. Itaque muros novos circa urbem aedificare sinit. Autem populus Carthaginis nullum auxilium mittit. Itaque Roma bellum conciliat." />} />
              <Route path="/" component={() => <Index />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
