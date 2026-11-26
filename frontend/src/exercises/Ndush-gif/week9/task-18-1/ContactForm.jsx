// Task 18.1 Ex. 3 — Usage: a contact form built on useForm.
// Added to the class version: <label>s on both inputs (Task 18.4 accessibility),
// and submit is blocked while the email is invalid.
import useForm from './useForm';

const validate = (values) => {
  const errors = {};
  if (!values.email.includes('@')) {
    errors.email = 'Invalid email';
  }
  return errors;
};

function ContactForm() {
  const { values, errors, touched, handleChange, handleBlur, reset } =
    useForm({ name: '', email: '' }, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(validate(values)).length > 0) return;
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="cf-name">Name</label>
      <input id="cf-name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />

      <label htmlFor="cf-email">Email</label>
      <input id="cf-email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
      {touched.email && errors.email && <span className="error" role="alert">{errors.email}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
