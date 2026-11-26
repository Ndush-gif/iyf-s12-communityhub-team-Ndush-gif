// Task 16.3 state with arrays: add, toggle and delete without mutating.
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: inputValue.trim(), completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <section>
      <form onSubmit={addTodo}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} aria-label="New todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
              {todo.text}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
