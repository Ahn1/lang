import React, { PureComponent } from "react";

import defaultLection from "../../data/lection1";

import Word from './Word'

class Learnplayer extends PureComponent {
  render() {
    const { lection } = this.props;

    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {lection.text.map(w => (
          <Word w={w} />
        ))}
      </div>
    );
  }
}

Learnplayer.defaultProps = {
  lection: defaultLection
};

export default Learnplayer;
