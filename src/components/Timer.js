import React, { useState, useEffect, useRef } from 'react';
import '../css/timer.css';
import Icon from './Icon';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000));
    return [hours, minutes, seconds].map(v => v < 10 ? '0' + v : v).join(':');
  };

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime(time)}</div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>
          {isRunning ? <Icon name="pause" className="time-icon" color="var(--white-to-black)" /> : <Icon name="start" className="time-icon" color="var(--white-to-black)"/>}
        </button>
        <div className="timer-separator"></div>
        <button onClick={resetTimer}>
          <Icon name="reset" className="time-icon" color="var(--white-to-black)" />
        </button>
      </div>
    </div>
  );
};

export default Timer;