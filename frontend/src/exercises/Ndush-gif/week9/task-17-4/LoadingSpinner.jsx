// Task 17.4 — Loading state component.
function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  return (
    // role="status" + aria-live so screen readers announce the wait
    <div className={`loading-spinner ${size}`} role="status" aria-live="polite">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
