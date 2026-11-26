// Day 1 — Timer: elapsed seconds, start/stop/reset, interval in useEffect with cleanup.
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;           // nothing to set up while stopped
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);           // runs on stop AND on unmount
  }, [running]);

  return (
    <section>
      <h2>Timer</h2>
      <p aria-live="polite">{seconds}s</p>
      <button onClick={() => setRunning(true)} disabled={running}>Start</button>
      <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
      <button onClick={() => { setRunning(false); setSeconds(0); }}>Reset</button>
    </section>
  );
}

export default Timer;
