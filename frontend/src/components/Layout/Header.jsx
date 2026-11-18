import { NavLink, Link } from 'react-router-dom';
import Button from '../shared/Button';

const linkClass = ({ isActive }) => (isActive ? 'active' : '');

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">CommunityHub</Link>

      <nav aria-label="Main">
        {/* `end` stops "/" from matching every route */}
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/posts" className={linkClass}>Posts</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </nav>

      <div className="user-menu">
        {/* Real auth arrives later — a login button is the Week 8 placeholder */}
        <Button variant="secondary" size="small">Log in</Button>
      </div>
    </header>
  );
}

export default Header;
