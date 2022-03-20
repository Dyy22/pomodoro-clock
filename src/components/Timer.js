import React, { useEffect } from "react";

export default function Timer(props) {
  const changeTime = (time) => {
    const minute = Math.floor(time / 60);
    const second = Math.round(time % 60);

    return (
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second)
    );
  };

  useEffect(() => {
    const timeLeft = document.getElementById("timer-display");
    if (props.displayTime <= 5) timeLeft.style.color = "#e74c3c";
    else timeLeft.style.color = "white";
  });

  return (
    <div
      id="timer"
      className="container-sm p-4 d-flex flex-column justify-content-between"
    >
      <div id="timer-display" className="p-5">
        <h5 id="timer-label">{props.onBreak ? "Break" : "Session"}</h5>
        <h1 id="time-left">{changeTime(props.displayTime)}</h1>
      </div>
      <div className="row  gap-3 justify-content-center">
        <button id="start_stop" className="col-sm-3" onClick={props.start}>
          {props.isStart ? "PAUSE" : "START"}
        </button>
        <button id="reset" className="col-sm-3" onClick={props.reset}>
          RESET
        </button>
      </div>
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}
