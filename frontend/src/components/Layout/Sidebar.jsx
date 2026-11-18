import Card from '../shared/Card';

// Hardcoded for Week 8 — becomes real data once the backend exists.
const popularPosts = [
  'Getting Started with React',
  'JavaScript Best Practices',
  'Why We Use Pull Requests',
];
const tags = ['react', 'javascript', 'css', 'git', 'career'];

function Sidebar() {
  return (
    <aside className="sidebar">
      <Card title="About">
        <p>A place for IYF Season 12 developers to share what they are building.</p>
      </Card>

      <Card title="Popular Posts">
        <ol className="popular-list">
          {popularPosts.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ol>
      </Card>

      <Card title="Tags">
        <ul className="tag-list">
          {tags.map((tag) => (
            <li key={tag} className="tag">#{tag}</li>
          ))}
        </ul>
      </Card>
    </aside>
  );
}

export default Sidebar;
