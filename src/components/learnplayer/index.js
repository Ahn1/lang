import React, { PureComponent } from "react";
import Sound from "react-sound";

import defaultLection from "../../data/lection1";

import Word from "./Word";

class Learnplayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      activeIndex: 0
    };

    this.onPlaying = this.onPlaying.bind(this);
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
    this.setState({ activeIndex: currentIndex - 1 });
  }

  render() {
    const { lection } = this.props;

    return (
      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "960px" }}>
        {lection.text.map((w, i) => (
          <Word active={i == this.state.activeIndex} w={w} key={i} />
        ))}

        <Sound
          url={lection.audio}
          playStatus={null}
          onPlaying={this.onPlaying}
          playStatus={this.state.playing || Sound.status.PLAYING}
          onPlaying={this.onPlaying}
        />
      </div>
    );
  }
}

Learnplayer.defaultProps = {
  lection: defaultLection
};

export default Learnplayer;
