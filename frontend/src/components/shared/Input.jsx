// Label + input (or textarea) pair, so every field is accessible by default.
function Input({ label, id, multiline = false, ...rest }) {
  const Field = multiline ? 'textarea' : 'input';
  return (
    <div className="field">
      {label && <label htmlFor={id}>{label}</label>}
      <Field id={id} {...rest} />
    </div>
  );
}

export default Input;
