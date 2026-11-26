// Task 17.4 — Error state component with an optional retry button.
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <span className="error-icon" aria-hidden="true">⚠️</span>
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Try Again</button>}
    </div>
  );
}

export default ErrorMessage;
