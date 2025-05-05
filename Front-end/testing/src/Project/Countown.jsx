import React, { useEffect, useState } from 'react'

function Countown() {
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
      if (secondsLeft <= 0) return;
  
      const timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer); // cleanup
    }, [secondsLeft]);
  
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    };
  
    return (
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {secondsLeft > 0 ? formatTime(secondsLeft) : "Time's up!"}
      </div>
    );
  };


export default Countown