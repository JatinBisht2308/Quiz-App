import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../styles/timer.css';
const Timer = () => {
  const timerDuration = 15 *  60; // 30 minutes in seconds

  return (
    <div className="countdown-timer">
      <CountdownCircleTimer
        isPlaying
        duration={timerDuration}
        colors={['#5794ef', '#ffcc29', '#ff5733', '#ff3333']}
        colorsTime={[600,599,299,0]}
        isSmoothColorTransition
        size={200}
        onComplete={() => {
          // Handle timer completion (e.g., end the quiz)
        }}
      >
        {({ remainingTime }) => (
          <div className="timer">
            {/* <div className="text">Time Remaining:</div> */}
            <div className="value animate">{Math.floor(remainingTime / 60)}:{remainingTime % 60}</div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer
