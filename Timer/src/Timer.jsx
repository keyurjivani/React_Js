import { useEffect, useState } from "react";

const Timer = () => {
  let [flag, setFlag] = useState(false);
  let [time, setTime] = useState(0);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  let id;
  useEffect(() => {
    id = setInterval(() => {
      if (time > 0) {
        if (flag) {
          setSecond(second - 1);
        }
        if (second == 0) {
          setSecond(59);
          setMinute(minute - 1);
        }
        if (minute == 0) {
          setMinute(59);
          setHour(hour - 1);
        }
      }
    }, 100);
    return () => clearInterval(id);
  }, [second, flag]);

  const divide = () => {
    let newTime = time / 60;
    setHour(Math.floor(newTime));
    setMinute(time - Math.floor(newTime) * 60 - 1);
    setSecond(59);
    setFlag(true);
  };

  const reset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setFlag(false);
  }

  const stop = () => {
    setFlag(false);
  }

 


  return (
    <div>
      <h1>
        {hour}:{minute}:{second}
      </h1>
      <input type="number" onChange={(e) => setTime(e.target.value)} />
     
      <h1>{time}</h1>
      <button onClick={divide}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
      

    </div>
  );
};



export default Timer;
