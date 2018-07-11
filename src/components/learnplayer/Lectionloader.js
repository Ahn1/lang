import React, { PureComponent } from "react";

import {getLectionById} from '../../data/content'
import Player from './Player';

class Lectionloader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: null };

    this.load();
  }

  async load(){
    this.setState({data:await getLectionById(this.props.match.params[0])});
  }

  render() {
    if (!this.state.data) return null;

    return <Player lection={this.state.data} />
  }
}

export default Lectionloader;
