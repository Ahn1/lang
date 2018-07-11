import React, { PureComponent } from 'react';

export default class Word extends PureComponent {

  render() {
    return (
      <div className={`${!this.props.active ? "playerword" : "playerword-active"}`} style={{padding: "3px", marginBottom: "15px"}}>
        <div className="olBack" style={{padding: "5px"}}>{this.props.w}</div>
        <div className="tlBack"><input defaultValue={this.props.defaultValue} type="text" onChange={e => this.props.onChange({index: this.props.index, word: e.target.value})} /></div>
      </div>
    );
  }

}
