import React, { PureComponent } from "react";

import Sound from "react-sound";

import Word from "./Word";

class Translator extends PureComponent {
  constructor(props) {
    super(props);

    this.playPosition = 0;
    this.state = {
      words: this.props.text.split(/\W/).filter(o => o.length > 0),
      playing: false,
      mapPosition: 1
    };
    this.state.translation = new Array(this.state.words.length);
    this.mappings = new Array(this.state.words.length)

    this.createTranslation = this.createTranslation.bind(this);
    this.onWordChanged = this.onWordChanged.bind(this);
    this.onPressNextWord = this.onPressNextWord.bind(this);
    this.onStartRecording = this.onStartRecording.bind(this);
  }

  createTranslation() {
    this.setState({
      code: JSON.stringify({
        text: this.state.words.map((word, i) => [
          word,
          this.state.translation[i] || "",
          this.mappings[i] || 0
        ])
      })
    });
  }

  onWordChanged({ index, word }) {
    var newTrans = [...this.state.translation];
    newTrans[index] = word;
    this.setState({ translation: newTrans });
  }

  onStartRecording() {
    this.playPosition = 0;
    this.mappings = new Array(this.state.words.length)
    this.setState({
      playing: Sound.status.PLAYING,
      mapPosition: 1
    });
  }

  onPressNextWord(e) {
    if (this.state.mapPosition > this.state.words.length) return;

    this.mappings[this.state.mapPosition] = this.playPosition;

    this.createTranslation();

    this.setState({mapPosition: this.state.mapPosition + 1})

  }

  render() {
    return (
      <div onKeyUp={e => e.keyCode != 39 || this.onPressNextWord()}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.words.map((w, i) => (
            <Word active={this.state.playing && this.state.mapPosition == i +1} onChange={this.onWordChanged} index={i} w={w} key={i} />
          ))}
        </div>

        <button onClick={this.onStartRecording}>Audio mappen</button>

        <Sound
          url="/lection1.wav"
          playStatus={null}
          onPlaying={this.onPlaying}
          playStatus={this.state.playing || Sound.status.STOPPED}
          onPlaying={(e => this.playPosition = e.position)}
        />

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
