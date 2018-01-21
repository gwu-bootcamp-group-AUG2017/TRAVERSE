import React from "react";

export const Div = ({ fluid, children }) =>
  <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;