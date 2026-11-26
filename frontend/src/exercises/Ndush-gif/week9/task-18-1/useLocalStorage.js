// Task 18.1 Ex. 1 — useLocalStorage hook.
// Added: try/catch around JSON.parse, so a corrupted saved value falls back to
// the initial value instead of crashing the page.
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get from localStorage or use initial value
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
