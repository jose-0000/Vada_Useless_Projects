import React, { useState, useEffect } from 'react';
function Timer({ initialSeconds = 30, onEnd }) {
  const [seconds, setSeconds] = useState(initialSeconds);

 useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((s) => {
      if (s <= 1) {
        clearInterval(interval);
        if (onEnd) onEnd();
        return 0;
      }
      return s - 1;
    });
  }, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="fixed top-4 left-4 text-2xl font-bold bg-blue-50 rounded-xl px-6 py-3 shadow text-center min-w-[120px]"
         style={{ zIndex: 1000 }}>
      ⏰ Time Left: {seconds}s
    </div>
  );
}

export default Timer;