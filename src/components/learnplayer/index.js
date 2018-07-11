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

    this.onPlaying = this.onPlaying.bind(this);
    this.onStartPlaying = this.onStartPlaying.bind(this);
  }

  onStartPlaying(e) {
    this.setState({ playing: true });
  }

  onPlaying(e) {
    const currentIndex = this.props.lection.text.findIndex((w, i) => {
      if (w[2] > e.position + 500) {
        return true;
      }
    });
    console.log(e.position, currentIndex);
    this.setState({ activeIndex: currentIndex - 1, position: e.position });
  }

  render() {
    const { lection } = this.props;

    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "960px" }}>
          {lection.text.map((w, i) => (
            <Word active={i === this.state.activeIndex} w={w} key={i} onClick={() => this.setState({position: w[2]})} />
          ))}

          <Sound
            url={lection.audio}
            playStatus={null}
            onPlaying={this.onPlaying}
            playStatus={
              this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            onPlaying={this.onPlaying}
            position={this.state.position}
          />
        </div>
        {this.state.playing ? (
          <button onClick={() => this.setState({ playing: false })}>
            Stop
          </button>
        ) : (
          <button onClick={this.onStartPlaying}>Play</button>
        )}
      </div>
    );
  }
}

Learnplayer.defaultProps = {
  lection: defaultLection
};

export default Learnplayer;
