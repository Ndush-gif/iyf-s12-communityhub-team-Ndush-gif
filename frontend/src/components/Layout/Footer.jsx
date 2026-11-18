import { Link } from 'react-router-dom';

// Computed once when the module loads, not on every render.
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Footer">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </nav>
      <p>&copy; {year} CommunityHub. Built by IYF Season 12.</p>
    </footer>
  );
}

export default Footer;
