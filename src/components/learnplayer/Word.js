import React from "react";
import styled from "styled-components";

const OlControl = styled.div`
  margin-top: 10px;
  font-size: 1.1em;
  cursor: pointer;
  padding: 3px 8px;
  background-color: #dcf7cf;
  :nth-of-type(2n) {
    background-color: #9fe080;
  }
  &.active {
    background-color: #ffde92;
  }
  > .tl {
    font-weight: bold;
  }

`;

export default ({ w, active, onClick }) => {
  return (
    <OlControl
      onClick={onClick}
      className={`${active ? "active" : ""}`}
    >
      <div className="ol">{w[0]}</div>
      <div className="tl">{w[1]}</div>
    </OlControl>
  );
};
