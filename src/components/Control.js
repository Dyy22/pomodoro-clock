import React from "react";
import ControlPart from "./ControlPart";

export default function Control(props) {
  return (
    <div id="control" className="container-sm mt-4 ">
      <div className="row align-items-center">
        <ControlPart
          name="break"
          value={Math.floor(props.break / 60)}
          updateTime={props.updateTime}
        />
        <ControlPart
          name="session"
          value={Math.floor(props.session / 60)}
          updateTime={props.updateTime}
        />
      </div>
    </div>
  );
}
