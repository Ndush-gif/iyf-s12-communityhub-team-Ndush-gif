// Task 16.1  useState Hook: counter and toggle.
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      
      <p>The toggle is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn((on) => !on)}>Toggle</button>
    </section>
  );
}

export default Counter;
