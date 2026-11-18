// Day 3 — UserList: renders a UserCard per user with a proper key; message when empty.
import './daily.css';

function UserCard({ user }) {
  return (
    <li className="dc-user-card">
      <strong>{user.name}</strong>
      <span>{user.role}</span>
    </li>
  );
}

function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p className="dc-empty">No users to show yet.</p>;
  }

  return (
    <ul className="dc-user-list">
      {users.map((user) => (
        // key = a stable unique id, never the array index
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
