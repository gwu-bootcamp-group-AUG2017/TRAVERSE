import React from "react";
import "./Panel.css";
const Panel = props => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h2 className="panel-title">
        <strong>
          <i className={`fa fa-${props.icon}`} aria-hidden="true" /> {props.title}
        </strong>
      </h2>
    </div>
    <div className="panel-body">{props.children}</div>
  </div>
);

export default Panel;
