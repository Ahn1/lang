import React from "react";

export default ({ w, active }) => {
  return (
    <div className={`${!active ? "playerword" : "playerword-active"}`} style={{ marginTop: "15px", fontSize: "1.3em" }}>
      <div className="olBack" style={{ padding: "3px" }}>
        {w[0]}
      </div>
      <div className="tlBack a" style={{ padding: "3px", fontWeight: "bold" }}>
        {w[1]}
      </div>
    </div>
  );
};
