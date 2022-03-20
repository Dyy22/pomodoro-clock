import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Timer from "./components/Timer";
import Control from "./components/Control";
import React, { useEffect, useState } from "react";

export default function App() {
  const [displaytime, setDisplaytime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [isStart, setIsStart] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const updateTime = (name, value) => {
    if (isStart) return;
    if (name === "break") {
      if (breakTime + value < 60 || breakTime + value > 60 * 60) return;
      setBreakTime((prev) => prev + value);
    } else {
      if (sessionTime + value < 60 || sessionTime + value > 60 * 60) return;
      setSessionTime((prev) => prev + value);
      if (!isStart) setDisplaytime(sessionTime + value);
    }
  };

  const startTime = () => {
    if (!isStart) {
      let interval = setInterval(() => {
        setDisplaytime((prev) => {
          return prev - 1;
        });
      }, 1000);

      localStorage.clear();
      localStorage.setItem("interval", interval);
    }

    if (isStart) {
      clearInterval(localStorage.getItem("interval"));
      stopAudio();
    }

    setIsStart(!isStart);
  };

  const resetTime = () => {
    clearInterval(localStorage.getItem("interval"));
    setDisplaytime(25 * 60);
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
    setIsStart(false);
    setOnBreak(false);
    stopAudio();
  };

  const playAudio = () => {
    const audio = document.getElementById("beep");

    audio.currentTime = 0;
    audio.play();
  };

  const stopAudio = () => {
    const audio = document.getElementById("beep");

    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    if (displaytime <= 0 && onBreak) {
      setOnBreak(false);
      setDisplaytime(sessionTime);
      playAudio();
    }
    if (displaytime <= 0 && !onBreak) {
      setOnBreak(true);
      setDisplaytime(breakTime);
      playAudio();
    }
  });

  return (
    <div className="App text-center">
      <h1 className="my-4">Pomodoro Clock</h1>
      <Timer
        displayTime={displaytime}
        onBreak={onBreak}
        isStart={isStart}
        start={startTime}
        reset={resetTime}
      />
      <Control
        updateTime={updateTime}
        session={sessionTime}
        break={breakTime}
      />
    </div>
  );
}
