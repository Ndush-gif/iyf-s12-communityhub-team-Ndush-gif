// Day 4 — Reusable Button: text, onClick, variant, disabled, size, loading.
import './daily.css';

function Button({
  text = 'Click me',
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
}) {
  return (
    <button
      type="button"
      className={`dc-btn dc-btn-${variant} dc-btn-${size}`}
      onClick={onClick}
      // a loading button can't be clicked twice
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading && <span className="dc-spinner" aria-hidden="true" />}
      {loading ? 'Loading…' : text}
    </button>
  );
}

export default Button;
