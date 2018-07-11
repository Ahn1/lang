import React, { PureComponent } from 'react';
import { Input } from 'semantic-ui-react'

import Styledword from '../styled/Styledword'

export default class Word extends PureComponent {

  render() {
    return (
      <Styledword className={`${this.props.active ? "active" : ""}`}>
        <div className="ol">{this.props.w}</div>
        <div className="tl" style={{marginTop: "5px"}}><Input placeholder={this.props.w} defaultValue={this.props.defaultValue} onChange={e => this.props.onChange({index: this.props.index, word: e.target.value})} /></div>
      </Styledword>
    );
  }

}
