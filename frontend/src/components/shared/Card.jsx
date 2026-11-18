function Card({ title, children, className = '' }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </section>
  );
}

export default Card;
