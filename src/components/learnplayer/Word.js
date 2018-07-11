import React from "react";

export default ({ w, active, onClick }) => {
  return (
    <div onClick={onClick} className={`${!active ? "playerword" : "playerword-active"}`} style={{ marginTop: "15px", fontSize: "1.3em", cursor: "pointer" }}>
      <div className="olBack" style={{ padding: "3px" }}>
        {w[0]}
      </div>
      <div className="tlBack a" style={{ padding: "3px", fontWeight: "bold" }}>
        {w[1]}
      </div>
    </div>
  );
};
