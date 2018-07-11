import React from "react";

export const Center = ({ children, ...props }) => (
  <div style={{ display: "flex", justifyContent: "center" }} {...props}>
    <div>{children}</div>
  </div>
);
