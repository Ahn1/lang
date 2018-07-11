import React, { PureComponent } from "react";
import Sound from "react-sound";
import { Button, Container } from "semantic-ui-react";

import Word from "./Word";
import { Center } from "../Layout";

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
      activeIndex: this.getSelectedIndexByPosition(
        position + wordSelectionDelay
      ),
      position: position
    });
  }

  getSelectedIndexByPosition(position = this.state.position) {
    return this.props.lection.text.findIndex((w, i) => w[2] > position) - 1;
  }

  render() {
    const { lection } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "#dcf7cf",
          flexGrow: "1"
        }}
      >
        <Center style={{height: "100%"}}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexGrow: "1",
              padding: "10px",
              maxWidth: "960px",
              height: "100%"
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
              playbackRate={0.9}
            />
          </div>

          <div style={{ background: "#eeeeff", padding: "10px" }}>
            {this.state.playing ? (
              <Button onClick={() => this.setState({ playing: false })}>
                Stop
              </Button>
            ) : (
              <Button onClick={this.onStartPlaying}>Play</Button>
            )}
          </div>
        </Center>
      </div>
    );
  }
}

export default Learnplayer;
