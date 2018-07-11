import React from "react";

import Styledword from '../styled/Styledword'

export default ({ w, active, onClick }) => {
  return (
    <Styledword
      onClick={onClick}
      className={`${active ? "active" : ""}`}
    >
      <div className="ol">{w[0]}</div>
      <div className="tl">{w[1]}</div>
    </Styledword>
  );
};
