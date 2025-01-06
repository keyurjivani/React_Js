import React, { useEffect, useState } from "react";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(30);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (hour === 0 && minute === 0 && second === 0) return;

    const timer = setInterval(() => {
      setSecond((second) => {
        if (second > 0) return second - 1;

        setMinute((minute) => {
          if (minute > 0) return minute - 1;

          setHour((hour) => (hour > 0 ? hour - 1 : 0));
          return 59;
        });

        return 59;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [hour, minute, second]);

  return (
    <div>
      {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:
      {second < 10 ? `0${second}` : second}
    </div>
  );
};

export default Timer;
