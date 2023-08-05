import { useState, useRef} from "react";


const CountTimer = () => {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef();

  const startTimer = () => {
    if (!isRunning && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => Math.max(prevSeconds - 1, 0));
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSeconds(parseInt(value));
  };
  return (
    <div>
      <h1>Countdown Timer</h1>

      <div>
        <input type="number" value={seconds} onChange={handleChange} />
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
      
        <p>{seconds == 0 ? "Time's up!" : `Time remaining: ${seconds} seconds`}</p>
      
      </div>
    </div>
  );
};

export default CountTimer;
