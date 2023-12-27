import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const time = () => {
    setDate(new Date());
  };
  useEffect(() => {
    setInterval(time, 1000);
  }, []);
  return <>{date.toLocaleTimeString()}</>;
};

export default Clock;
