import React, { PureComponent } from "react";
import Sound from "react-sound";

import defaultLection from "../../data/latin1";

import Word from "./Word";

class Learnplayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      activeIndex: 0,
      position: 0
    };

    this.onStartPlaying = this.onStartPlaying.bind(this);
    this.onPositionChanged = this.onPositionChanged.bind(this);
  }

  onStartPlaying(e) {
    this.setState({ playing: true });
  }

  onPlaying(e) {
    this.setState({
      activeIndex: this.getSelectedIndexByPosition(e.position),
      position: e.position
    });
  }

  onPositionChanged(position, wordSelectionDelay = 0) {
    this.setState({
      activeIndex: this.getSelectedIndexByPosition(position + wordSelectionDelay),
      position: position
    });
  }

  getSelectedIndexByPosition(position = this.state.position) {
    return (
      this.props.lection.text.findIndex((w, i) => w[2] > position) - 1
    );
  }

  render() {
    const { lection } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "960px",
            flexGrow: "1"
          }}
        >
          {lection.text.map((w, i) => (
            <Word
              active={i === this.state.activeIndex}
              w={w}
              key={i}
              onClick={() => this.onPositionChanged(w[2])}
            />
          ))}

          <Sound
            url={lection.audio}
            playStatus={
              this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            onPlaying={e => this.onPositionChanged(e.position, 500)}
            position={this.state.position}
          />
        </div>

        <div style={{ height: "50px", background: "#eeeeff" }}>
          {this.state.playing ? (
            <button onClick={() => this.setState({ playing: false })}>
              Stop
            </button>
          ) : (
            <button onClick={this.onStartPlaying}>Play</button>
          )}
        </div>
      </div>
    );
  }
}

Learnplayer.defaultProps = {
  lection: defaultLection
};

export default Learnplayer;
