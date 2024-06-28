import React, { useState, useEffect, useMemo } from "react";

const UseMemoV1: React.FC<any> = () => {
  const time = useTime();
}

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time; (
    {time! ? time.toLocaleTimeString() : ""}
  );
};

export default UseMemoV1;
