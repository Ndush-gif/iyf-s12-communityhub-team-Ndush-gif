import { useState } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';

const emptyForm = { title: '', content: '' };

function CreatePost({ onCreate }) {
  const [formData, setFormData] = useState(emptyForm);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Please add a title and some content.');
      return;
    }
    onCreate({ title: formData.title.trim(), content: formData.content.trim() });
    setFormData(emptyForm);
    setError('');
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h3>Create a post</h3>
      <Input
        id="post-title"
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="What's your post about?"
      />
      <Input
        id="post-content"
        label="Content"
        name="content"
        multiline
        rows={4}
        value={formData.content}
        onChange={handleChange}
        placeholder="Share what you're building…"
      />
      {error && <p className="form-error" role="alert">{error}</p>}
      <Button type="submit">Publish</Button>
    </form>
  );
}

export default CreatePost;
