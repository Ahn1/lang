import React, { PureComponent } from "react";

import Word from "./Word";

class Translator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      words: this.props.text.split(/\W/).filter(o => o.length > 0)
    };
    this.state.translation = new Array(this.state.words.length);

    this.createTranslation = this.createTranslation.bind(this);
    this.onWordChanged = this.onWordChanged.bind(this);
  }

  createTranslation() {
    this.setState({
      code: JSON.stringify({
        text: this.state.words.map((word, i) => [
          word,
          this.state.translation[i] || ""
        ])
      })
    });
  }

  onWordChanged({ index, word }) {
    var newTrans = [...this.state.translation];
    newTrans[index] = word;
    this.setState({ translation: newTrans });
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.words.map((w, i) => (
            <Word onChange={this.onWordChanged} index={i} w={w} />
          ))}
        </div>
        <button onClick={this.createTranslation}>Erstellen</button>
        <div>
          <textarea
            value={this.state.code}
            style={{ width: "100%", minHeight: "400px" }}
          />
        </div>
      </div>
    );
  }
}

export default Translator;
