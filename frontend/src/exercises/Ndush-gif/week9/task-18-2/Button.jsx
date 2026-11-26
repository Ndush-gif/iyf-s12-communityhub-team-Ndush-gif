// Task 18.2 Ex. 1 — A Button styled with a CSS Module.
// (We chose CSS Modules over Tailwind, Ex. 2 — the task allows either.)
import styles from './Button.module.css';

function Button({ variant = 'primary', children, ...props }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
