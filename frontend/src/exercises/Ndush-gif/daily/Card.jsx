// Day 2 — Card with title, children and a variant (primary, secondary, outlined).
import './daily.css';

function Card({ title, children, variant = 'primary' }) {
  return (
    <div className={`dc-card dc-card-${variant}`}>
      {title && <h3 className="dc-card-title">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

export default Card;
