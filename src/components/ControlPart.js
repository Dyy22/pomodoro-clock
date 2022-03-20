import React from "react";

export default function ControlPart(props) {
  return (
    <div id={props.name} className="col-sm-6 mb-4">
      <div id={`${props.name}-label`}>{props.name} Length</div>
      <div
        id={`${props.name}-control`}
        className="d-flex justify-content-center gap-4"
      >
        <button
          id={`${props.name}-decrement`}
          onClick={() => props.updateTime(props.name, -60)}
        >
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
        <div id={`${props.name}-length`}>{props.value}</div>
        <button
          id={`${props.name}-increment`}
          onClick={() => props.updateTime(props.name, 60)}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
