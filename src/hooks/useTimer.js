import { useState, useEffect } from "react";

export const useTimer = (initialTime) => {
  const [time, setTime] = useState(initialTime * 60)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const restart = () => {
    setTime(initialTime * 60);
    setIsRunning(true);
  };

  const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);

  return { time: formattedTime, start, stop, restart };
};

