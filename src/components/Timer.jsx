import React from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../styles/timer.css";
const Timer = ({ isRunning }) => {
  const timerDuration = 15 * 60; // 15 minutes in seconds
  const navigate = useNavigate();
  return (
    <div className="countdown-timer">
      <CountdownCircleTimer
        isPlaying={isRunning}
        duration={timerDuration}
        colors={["#5794ef", "#ffcc29", "#ff5733", "#ff3333"]}
        colorsTime={[600, 599, 299, 0]}
        isSmoothColorTransition
        size={200}
        onComplete={() => {
          // Handle timer completion (e.g., end the quiz)
          navigate("/results");
        }}
      >
        {({ remainingTime }) => (
          <div className="timer">
            <div className="value">
              {Math.floor(remainingTime / 60)}:{remainingTime % 60}
            </div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
