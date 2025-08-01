import React, { useState, useEffect } from 'react';
function Timer({ initialSeconds = 30, onEnd }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      if (onEnd) onEnd();
      return;
    }
    const interval = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, onEnd]);

  return (
    <div className="fixed top-4 left-4 text-2xl font-bold bg-blue-50 rounded-xl px-6 py-3 shadow text-center min-w-[120px]"
         style={{ zIndex: 1000 }}>
      ⏰ Time Left: {seconds}s
    </div>
  );
}

export default Timer;