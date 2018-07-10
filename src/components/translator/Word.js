import React, { PureComponent } from 'react';

export default class Word extends PureComponent {

  render() {
    return (
      <div style={{padding: "3px"}}>
        <div style={{padding: "5px"}}>{this.props.w}</div>
        <div><input type="text" onChange={e => this.props.onChange({index: this.props.index, word: e.target.value})} /></div>
      </div>
    );
  }

}
